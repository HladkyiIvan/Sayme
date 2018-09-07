import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { Post } from '../Models/post';
import { User } from '../Models/user';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
  providers: [PostService, UserService]
})
export class UserpageComponent implements OnInit {

  posts = [];
  curUser:User;
  imageData;
  user = new User();
  userToChange = new User();
  newPost = new Post();
  displayProfileSettings: boolean = false;
  somePost: Post;
  editedPostMessage: string;
  postID: number;

  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit() {
    this.loadUserPosts();
  }

  loadUserPosts(){
    this.userService.getCurrent()
      .subscribe((data: User) => {
        this.user = data;
        this.getPostsFromService(data);
        this.imageData = 'data:image/jpg;base64,' + data.avatar;
      }, err => console.error(err));
  }

  getPostsFromService(user: User){
    this.postService.getUserPosts(user.id)
      .subscribe((data: Post[]) => this.posts = data);
    this.posts.forEach(post => {
      post.is_changing = false;
    });
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

  myUploader(event, form){
    let file: File = event.files[0];
    this.userService.updateAvatar(this.user.id ,file)
      .subscribe(() => (this.convertToBase64(file)),(err) => console.error(err));
    form.clear();
  }

  convertToBase64(file){
    let that = this;
    var reader = new FileReader();
    reader.readAsDataURL(file); 
    reader.onloadend = function() {
      that.imageData = reader.result.toString();
      that.imageData = that.imageData.replace(/^data:image\/[a-z]+;base64,/, "");
    }
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
    this.somePost.message = this.editedPostMessage;
    this.postService.updatePost(this.somePost).subscribe();
  }

  cancelEditPost(){
    this.somePost.is_changing = false;
  }
}
