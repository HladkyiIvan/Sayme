import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { PostService } from '../../services/post.service';
import { Post } from '../../Models/post';
import { timer } from 'rxjs/internal/observable/timer';
import { NGXLogger } from 'ngx-logger';
import { PostImage } from '../../Models/postImage';
import { Id } from '../../Models/Id';
import { HttpErrorResponse } from '@angular/common/http';
import { SubscriptionService } from '../../services/subscription.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CommentComponent } from '../comment/comment.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService, UserService, NGXLogger]
})
export class PostComponent implements OnInit, OnDestroy {

  currentPageHeight: number;
  noMoreNewPosts: boolean = false;
  following = [];
  subscriptions: Subscription[];
  posts: Post[] = [];
  usersToSearch = [];
  currentUser: User;
  postAndImage = [];
  newPost = new Post();
  haveAvatar = true;
  blacklisted = [];
  // timeIt = timer(1, 10000);
  lastPostID: number = 0;
  newestPostID: number = 0;
  mynewposts: Post;
  timeIt = timer(10000, 5000);
  modalRef: BsModalRef;

  like_timer = timer(2000);

  constructor(
    private postService: PostService,
    private userService: UserService,
    private modalService: BsModalService,
    private router: Router,
    private subscriptionService: SubscriptionService) {
    this.subscriptions = [];
  }

  // При первом вызове компонента вызывается метод сервиса, который
  // возвращает все посты, которые он нашел по АПИшке, и добавляет их
  // в локальный массив, который в свою очередь общаеться с формой 
  // хтмл файла. 
  ngOnInit() {
    this.postService.getLastPostId()
      .subscribe(data => {
        // console.log(data); 
        this.lastPostID = data;
        this.newestPostID = data;
        this.loadPosts(this.lastPostID);
      });
    this.loadCurrentUser();
    this.addImages(this.posts);
    this.subscriptions.push(this.timeIt.subscribe(() => { this.loadNewPosts() }));
    this.postService.getLastPost()
      .subscribe(data => {
        // console.log(data);
        this.refreshLikes(data);
        this.checkIfLiked(data);
        this.addImages(data);
        this.postAndImage.push(new PostImage(data, 'data:image/jpg;base64,' + data.avatar));
      });
  }

  ngOnDestroy() {
    for (let subs of this.subscriptions) {
      subs.unsubscribe();
    }
  }

  // добавляет новый пост в список постов залогиненого юзера
  onSay() {
    if (this.newPost.message.length <= 256 &&
      this.newPost.message.length > 0) {
      this.newPost.id_user = this.currentUser.id;
      this.newPost.username = this.currentUser.login;
      this.newPost.post_date = new Date();
      this.postService.createPost(this.newPost)
        .subscribe(() => {
          // this.addImages(this.newPost);
          // this.postAndImage.push(new PostImage(this.newPost, 'data:image/jpg;base64,' + this.currentUser.avatar));
          this.newPost = new Post();
        });
    }
  }

  loadFollowing() {
    this.subscriptionService.getFollowing()
      .subscribe((data: User[]) => {
        this.following = data;
        console.log(this.following);
      })
  }

  loadCurrentUser() {
    this.userService.getCurrent()
      .subscribe((data: User) => this.currentUser = data);
  }

  loadPosts(lastPostId) {
    this.userService.getUsers()
      .subscribe((data: User[]) => this.usersToSearch = data);

    this.postService.getPosts(lastPostId)
      .subscribe((data: Post[]) => {
        if (data === null || data.length == 0) {
          return;
        }
        for (let post of data.reverse()) {
          this.refreshLikes(post);
          this.checkIfLiked(post);
          this.posts.push(post);
        }
        this.addImages(data);
        this.lastPostID = this.posts[this.posts.length - 1].id;
        // console.log('lastPostId : ' + this.lastPostID);
      });
  }

  @HostListener('document:scroll', ['$event'])
  onScroll(event: any) {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if (Math.floor(pos) == max || Math.floor(pos) == max - 1) {
      // console.log("End");
      this.loadPosts(this.lastPostID);
      this.postService.checkForLastPostInDB(this.lastPostID)
        .subscribe(isItLast => this.noMoreNewPosts = isItLast);
    }
  }

  loadNewPosts() {
    if (this.posts != null && this.posts.length != 0) {
      let postID = this.newestPostID;
      this.postService.getNewPosts(new Id(postID))
        .subscribe((data: Post[]) => {
          if (data != null) {
            for (let post of data.reverse()) {
              this.refreshLikes(post);
              this.checkIfLiked(post);
              // this.addImages(post);
              this.newestPostID = post.id;
              this.postAndImage.push(new PostImage(post, 'data:image/jpg;base64,' + post.avatar));
            }
          }
        });
    }
  }

  getPostDate(date: Date) {
    var yyyy = date.getFullYear().toString();
    var mm = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1).toString(); // getMonth() is zero-based
    var dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
    var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours().toString();
    var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes().toString();
    return "".concat(yyyy).concat(mm).concat(dd).concat(hh).concat(min);
  }

  addImages(data) {
    for (let post of data) {
      if (post.avatar == null) {
        this.postAndImage.unshift(new PostImage(post, null));
      }
      else {
        this.postAndImage.unshift(new PostImage(post, 'data:image/jpg;base64,' + post.avatar));
      }
    }
  }

  gotoUserpage(id: number) {
    let strId = id.toString();
    this.userService.getCurrent()
      .subscribe((data: User) => {
        if (data.id == id) {
          this.router.navigate(['**']);
        }
        else {
          this.router.navigate(['/user/' + strId]);
        }
      }, (error: HttpErrorResponse) => console.log(error));
  }

  openCommentsModal(post: Post) {
    const initialState = {
      post: post
    };
    this.modalRef = this.modalService.show(CommentComponent, { class: 'modal-lg modal-dialog-centered ', initialState });
  }
  likePost(post: Post) {
    this.postService.likePost(post.id)
      .subscribe(object => {
        this.refreshLikes(post);
        this.checkIfLiked(post);
      }, error => console.log(error));
  }

  checkIfLiked(post: Post) {
    this.postService.checkIfLiked(post.id)
      .subscribe((res: boolean) => {
        post.isLiked = res;
        /*  if (res) {
            this.likeImgUrl = '/assets/images/heart_red.png';
          }
          else {
            this.likeImgUrl = '/assets/images/heart.png';
          }*/
      });
  }

  refreshLikes(post: Post) {
    this.postService.countLikes(post.id)
      .subscribe((numOfLikes: number) => {
        post.numOfLikes = numOfLikes;
      });
    this.subscriptions.push(this.like_timer.subscribe(() => { this.refreshLikes(post) }));
  }


}

