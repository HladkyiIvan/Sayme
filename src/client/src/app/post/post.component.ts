import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { UsersService } from '../services/users.service';
import { Users } from '../Models/users';
import { PostService } from '../services/post.service';
import { Post } from '../Models/post';
import { timer } from 'rxjs/internal/observable/timer';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService, UsersService]
})
export class PostComponent implements OnInit{

  posts = [];
  usersToSearch = [];
  newpost = new Post();
  newuser = new Users();
  maxUserId = 0;
  timeit = timer(1, 10000);

  constructor(private _postService: PostService, private _usersService: UsersService){}

  // При первом вызове компонента вызывается метод сервиса, который
  // возвращает все посты, которые он нашел по АПИшке, и добавляет их
  // в локальный массив, который в свою очередь общаеться с формой 
  // хтмл файла.
  ngOnInit(){
    this.timeit.subscribe(x => this.loadPosts());
  }

  // добавляет новый пост в список постов
  onSay(){
    this.usersToSearch.forEach(element => {
      if (element.login == this.newpost.username){
        this.newpost.id_user = element.id;
      }
    });

    if (this.newpost.id_user == null){
        this.newuser.login = this.newpost.username;
        this.newuser.mail = " ";
        this.newuser.password = " ";
        this.newuser.bio = " ";
        this.newuser.active = true;
        this._usersService.createUser(this.newuser)
            .subscribe((data: Users) => this.usersToSearch.push(data));

        this.usersToSearch.forEach(element => {
          if(element.id > this.maxUserId){
            this.maxUserId = element.id;
          }
        });

        this.loadPosts();

        this.newpost.id_user = this.maxUserId + 1;
    }
    
    this.loadPosts();

    this._postService.createPost(this.newpost)
        .subscribe((data: Post) => this.posts.push(data));

    this.newpost = new Post();
    this.newuser = new Users(); 

    this.loadPosts();
  }

  loadPosts() {
    this._postService.getPosts()
        .subscribe((data: Post[]) => this.posts = data);
    this._usersService.getUsers()
        .subscribe((data: Users[]) => this.usersToSearch = data);
  } 

  
}

