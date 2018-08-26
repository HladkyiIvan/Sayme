import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { UserService } from '../services/user.service';
import { User } from '../Models/user';
import { PostService } from '../services/post.service';
import {LoginService} from'../services/login.service';
import { Post } from '../Models/post';
import { timer } from 'rxjs/internal/observable/timer';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService, UserService]
})
export class PostComponent implements OnInit {

  posts = [];
  usersToSearch = [];
  newPost = new Post();
  newUser = new User();
  maxUserId = 0;
  timeIt = timer(1, 10000);

  constructor(private postService: PostService, private userService: UserService,private loginService: LoginService) { }

  // При первом вызове компонента вызывается метод сервиса, который
  // возвращает все посты, которые он нашел по АПИшке, и добавляет их
  // в локальный массив, который в свою очередь общаеться с формой 
  // хтмл файла.
  ngOnInit() {
    this.loginService.checkLoggingIn();
    this.timeIt.subscribe(x => this.loadPosts());
    
  }

  // добавляет новый пост в список постов
  onSay() {
    if (this.newPost.username.length > 2 &&
        this.newPost.username.length <= 16 && 
        this.newPost.message.length <= 256 &&
        this.newPost.message.length > 0 ) {
      this.usersToSearch.forEach(element => {
        if (element.login == this.newPost.username) {
          this.newPost.id_user = element.id;
        }
      });

      if (!this.newPost.id_user) {
        this.newUser.login = this.newPost.username;
        this.newUser.mail = ' ';
        this.newUser.password = ' ';
        this.newUser.bio = ' ';
        this.newUser.active = true;
        this.newUser.register_code='';
        this.userService.createUser(this.newUser).
          subscribe((data: User) => this.usersToSearch.push(data));

        this.usersToSearch.forEach(element => {
          if (element.id > this.maxUserId) {
            this.maxUserId = element.id;
          }
        });

        this.newPost.id_user = this.maxUserId + 1;
      }

      this.loadPosts();

    this.newPost.post_date = new Date();
    this.postService.createPost(this.newPost)
    .subscribe((data: Post) => this.posts.push(data));

      this.newPost = new Post();
      this.newUser = new User();
    }
  }

  loadPosts() {
    this.userService.getUsers()
        .subscribe((data: User[]) => this.usersToSearch = data);
    this.postService.getPosts()
        .subscribe((data: Post[]) => this.posts = data);
    
  } 

  getPostDate(date: Date) {
   var yyyy = date.getFullYear().toString();
   var mm = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1).toString(); // getMonth() is zero-based
   var dd  = date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
   var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours().toString();
   var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes().toString();
   return "".concat(yyyy).concat(mm).concat(dd).concat(hh).concat(min);
  }

  
}

