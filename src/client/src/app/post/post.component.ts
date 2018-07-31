import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { PostService } from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit{

  posts = [];
  username = "user"
  newpost = new Post()
  // newuser = new Users()

  constructor(private _postService: PostService){}

  ngOnInit(){
    this.loadPosts();
  }

  onSay(){
    // this.newuser.active = true;
    // this.newuser.bio = " ";
    // this.newuser.mail = " ";
    // this.newuser.password = " ";

    // this._usersService.createUser(this.newuser)
    // .subscribe((data: Users) => this.newuser.push(data));

    this.newpost.id_user = 1;
    this._postService.createPost(this.newpost)
    .subscribe((data: Post) => this.posts.push(data));
    this.newpost = new Post() 
  }

  loadPosts() {
    this._postService.getPosts()
        .subscribe((data: Post[]) => this.posts = data);
  } 

  // loadUsername(post: Post) {
  //   var username = "";

  //   this._usersService.getUser(post.id_user)
  //       .subscribe((data: Users) => username = data.login);

  //   return username;
  // } 
}

