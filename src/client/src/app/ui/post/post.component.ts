import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
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
import {SubscriptionService} from '../../services/subscription.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService, UserService, NGXLogger]
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  usersToSearch = [];
  currentUser: User;
  postAndImage = [];
  newPost = new Post();
  haveAvatar = true;
  lastPostID = 0;
  mynewposts: Post;
  timeIt = timer(10000, 10000);
  blacklisted=[];

  constructor(
    private postService: PostService, 
    private userService: UserService, 
    private logger: NGXLogger, 
    private router: Router,
    private subscriptionService:SubscriptionService) { }

  // При первом вызове компонента вызывается метод сервиса, который
  // возвращает все посты, которые он нашел по АПИшке, и добавляет их
  // в локальный массив, который в свою очередь общаеться с формой 
  // хтмл файла. 
  ngOnInit() {
    this.loadBlackList();
    this.loadCurrentUser();
    this.loadPosts();
    this.addImages(this.posts);
  }

  // добавляет новый пост в список постов залогиненого юзера
  onSay() {
    if (this.newPost.message.length <= 256 &&
      this.newPost.message.length > 0) {
      this.newPost.id_user = this.currentUser.id;
      this.newPost.username = this.currentUser.login;
      this.newPost.post_date = new Date();
      this.postService.createPost(this.newPost)
        .subscribe(x => {
          this.addImages(this.newPost);
          this.newPost = new Post();
        });
    }
  }

  loadBlackList() {
    this.subscriptionService.getBlacklisted()
      .subscribe((data: User[]) => {
        this.blacklisted = data;
      })
  }

  loadCurrentUser() {
    this.userService.getCurrent()
      .subscribe((data: User) => this.currentUser = data);
  }

  loadPosts() {
    this.userService.getUsers()
      .subscribe((data: User[]) => this.usersToSearch = data);

    this.postService.getPosts()
      .subscribe((data: Post[]) => {
        this.loadBlackList();
        this.posts = data;
        this.addImages(data);
      });


  }

  loadNewPosts(){
    let lastPost: Post = this.postAndImage[0];
    let postID = lastPost.id;
    this.postService.getNewPosts(new Id(postID))
      .subscribe((data: Post[]) => {
        try{
          for(let post of data.reverse()){
            this.mynewposts = post;
            this.postAndImage.unshift(post);
          }
        }
        catch
        {
          console.log("Failed to fetch new posts (maybe they disappeared...)");
        }
    });
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
    let isInBlacklist: boolean = false;
    //var usersInBlacklist = this.subscriptionService.blacklist;
    console.log(this.blacklisted);
    for (let post of data) {
      isInBlacklist=false;
      for(let blockUser of this.blacklisted){
        if (post.id_user === blockUser.id){
          isInBlacklist = true;
        }
      }
      if (!isInBlacklist) {
        if (post.avatar == null){
          this.postAndImage.unshift(new PostImage(post, null));
        }
        else{
          this.postAndImage.unshift(new PostImage(post, 'data:image/jpg;base64,' + post.avatar));
        }
      }
    }
  }

  gotoUserpage(id:number){
    let strId = id.toString();
    this.userService.getCurrent()
      .subscribe((data: User) => {
        if (data.id == id){
          this.router.navigate(['**']);
        }
        else{
          this.router.navigate(['/user/' + strId]);
        }
      }, (error: HttpErrorResponse) => console.log(error));
  }
}

