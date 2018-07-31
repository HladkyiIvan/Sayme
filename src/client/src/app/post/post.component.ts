import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { PostService } from '../post.service';
import { UsersService } from '../users.service';
import {Post} from '../post';
import {Users} from '../users';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit{

  posts = [];
  usersToSearch = [];
  newpost = new Post();
  newuser = new Users();
  username = "username";

  constructor(private _postService: PostService, private _usersService: UsersService){}

  ngOnInit(){
    this.loadPosts();
  }

  onSay(){
    this._usersService.getUsers()
        .subscribe((data: Users[]) => this.usersToSearch = data);

    this.usersToSearch.forEach(element => {
      if (element.login == this.username){
        this.newpost.id_user = element.id;
      }
      else{
        this.newuser.login = this.username;
        this.newuser.mail = " ";
        this.newuser.password = " ";
        this.newuser.bio = " ";
        this.newuser.active = true;
        this._usersService.createUser(this.newuser)
        .subscribe((data: Users) => this.usersToSearch.push(data));

        this.newpost.id_user = this.usersToSearch.length + 1;
      }
    });

    this._postService.createPost(this.newpost)
    .subscribe((data: Post) => this.posts.push(data));
    this.newpost = new Post();
    this.newuser = new Users();
  }

  loadPosts() {
    this._postService.getPosts()
        .subscribe((data: Post[]) => this.posts = data);
  } 
}

