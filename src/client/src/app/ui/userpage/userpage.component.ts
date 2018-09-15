import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../Models/post';
import { User } from '../../Models/user';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
  providers: [PostService, UserService]
})
export class UserpageComponent implements OnInit {

  posts = [];
  imageData;
  user = new User();
  newPost = new Post();
  haveAvatar = true;
  displayProfileSettings: boolean = false;
  somePost: Post;
  editedPostMessage: string;

  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit() {
    this.loadUserPosts();
  }

  updateAvatar(file:File){
    this.user.avatar = file;
    let that = this;
    var reader = new FileReader();
    reader.readAsDataURL(file); 
    reader.onloadend = function() {
      that.imageData = reader.result.toString();
      console.log(that.imageData);
    }
  }

  updateBio(bio:string){
    this.user.bio = bio;
  }

  loadUserPosts(){
    this.userService.getCurrent()
      .subscribe((data: User) => {
        this.user = data;
        this.user = data;
        this.getPostsFromService(data);
        if(data.avatar == null){
        }
        else{
          this.user.avatar = data.avatar;
          this.imageData = 'data:image/jpg;base64,' + data.avatar;
        }
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
    if (this.newPost.message !== undefined &&
        (this.newPost.message.length <= 256 &&
        this.newPost.message.replace(/\s/g, '').length > 0 )) {
      this.newPost.id_user = this.user.id;
      this.newPost.username = this.user.login;
      this.newPost.post_date = new Date();
      this.postService.createPost(this.newPost)
        .subscribe((data: Post) => this.posts.unshift(data));
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
