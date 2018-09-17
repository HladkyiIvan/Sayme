import { Component, OnInit } from '@angular/core';
import { Post } from '../../Models/post';
import { User } from '../../Models/user';
import { BaseUserpageComponent } from '../base-userpage/base-userpage.component';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
  providers: []
})
export class UserpageComponent extends BaseUserpageComponent implements OnInit {

  newPost = new Post();
  displayProfileSettings: boolean = false;
  somePost: Post;
  editedPostMessage: string;

  ngOnInit() {
    this.loadCurrentUserPosts();
  }

  updateAvatar(file:File){
    this.user.avatar = file;
    let that = this;
    var reader = new FileReader();
    reader.readAsDataURL(file); 
    reader.onloadend = function() {
      that.imageData = reader.result.toString();
    }
  }

  updateBio(bio:string){
    this.user.bio = bio;
  }

  // добавляет новый пост в список постов
  onSay() {
    if (this.newPost.message.length <= 256 &&
        this.newPost.message.length > 0 ) {
      this.newPost.id_user = this.user.id;
      this.newPost.username = this.user.login;
      this.newPost.post_date = new Date();
      this.postService.createPost(this.newPost)
        .subscribe((data: Post) => this.posts.push(data));
      this.newPost = new Post();
    }
  }

  // Открыть диалог настройки аккаунта
  showProfileSettings() {
    this.displayProfileSettings = !this.displayProfileSettings;
  }

  changePost(idPost: number){
    this.posts.forEach(post => {
      post.is_changing = false;
    });
    this.somePost = this.posts.find(post => post.id === idPost);
    this.somePost.is_changing = !this.somePost.is_changing;
    console.log(this.somePost.is_changing);
    this.editedPostMessage = this.somePost.message;

    var temp;
    if(temp = this.posts.filter(post => {
      post.is_changing === true && post.id !== idPost
    }))
    {
      temp.forEach(element => {
        element.is_changing = false;
      });
    }
  }

  submitEditPost(){
    this.somePost.is_changing = false;
    if(this.somePost.message !== this.editedPostMessage)
    {
      this.somePost.message = this.editedPostMessage;
      this.postService.updatePost(this.somePost).subscribe();
    }
  }

  cancelEditPost(){
    this.somePost.is_changing = false;
  }
}
