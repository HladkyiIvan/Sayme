import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { PostService } from '../../services/post.service';
import { Post } from '../../Models/post';
import { timer } from 'rxjs/internal/observable/timer';
import { PostImage } from '../../Models/postImage';
import { HttpErrorResponse } from '@angular/common/http';
import {SubscriptionService} from '../../services/subscription.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService, UserService]
})
export class PostComponent implements OnInit {

  posts = [];
  usersToSearch = [];
  currentUser: User;
  postAndImage = [];
  newPost = new Post();
  haveAvatar = true;
  timeIt = timer(1, 10000);

  constructor(
    private postService: PostService, 
    private userService: UserService,
    private subscriptionService:SubscriptionService,
    private router: Router) { }

  // При первом вызове компонента вызывается метод сервиса, который
  // возвращает все посты, которые он нашел по АПИшке, и добавляет их
  // в локальный массив, который в свою очередь общаеться с формой 
  // хтмл файла. 
  ngOnInit() {
   this.loadCurrentUser()
    this.timeIt.subscribe(x => this.loadPosts());
    this.updateImages(this.posts);
  }

  // добавляет новый пост в список постов залогиненого юзера
  onSay() {
      if (this.newPost.message.length <= 256 &&
        this.newPost.message.length > 0 ) {
      this.newPost.id_user = this.currentUser.id;
      this.newPost.username = this.currentUser.login;
      this.newPost.post_date = new Date();
      this.postService.createPost(this.newPost)
        .subscribe((data: Post) => {this.posts.push(data),this.loadPosts();});
      this.newPost = new Post();
    }
  }

  loadBlackList() {
    this.subscriptionService.getBlackList()
      .subscribe((data: User[]) => { 
        this.subscriptionService.blacklist=data;
       })
  };
  loadCurrentUser() {
    this.userService.getCurrent()
      .subscribe((data: User) => this.currentUser = data);
  }

  loadPosts() {
    this.userService.getUsers()
      .subscribe((data: User[]) => this.usersToSearch = data);
     
      this.postService.getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
        this.updateImages(data);
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

  updateImages(data) {
    for (let post of data) {
      if (post.avatar == null)
        this.postAndImage.push(new PostImage(post, null));
      else
        this.postAndImage.push(new PostImage(post, 'data:image/jpg;base64,' + post.avatar));
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

