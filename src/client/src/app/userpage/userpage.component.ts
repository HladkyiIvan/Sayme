import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { FeedbackService } from '../services/feedback.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../Models/post';
import { User } from '../Models/user';
import { Email } from '../Models/email';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
  providers: [PostService, UserService, FeedbackService]
})
export class UserpageComponent implements OnInit {

  posts = [];
  imageData;
  user = new User();
  newBio:string;
  checkPassword:string;
  newPassword:string;
  newPasswordCheck:string;
  newPost = new Post();
  haveAvatar = true;
  displayProfileSettings: boolean = false;
  passwordCheckBtnIsDisabled: boolean = false;
  newPasswordCheckBtnIsDisabled: boolean = false;
  codeCheckBtbIsDisabled: boolean = false;
  isErrorHidden: boolean = true;
  isMessageHidden: boolean = true
  errorMessage:string;
  message:string;
  code: string;
  somePost: Post;

  constructor(private postService: PostService, private userService: UserService, private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.loadUserPosts();
  }

  loadUserPosts(){
    this.userService.getCurrent()
      .subscribe((data: User) => {
        this.user = data;
        this.newBio = this.user.bio;
        this.getPostsFromService(data);
        this.imageData = 'data:image/jpg;base64,' + data.avatar;
      }, err => console.error(err));

      if(this.user.avatar == null){
        this.haveAvatar = false;
      }
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
      .subscribe(() => {this.convertToBase64(file);
      this.haveAvatar = true;}
      ,(err) => console.error(err));
    form.clear();
  }

  saveNewBio(){
    let oldBio = this.user.bio;
    this.user.bio = this.newBio;

    this.userService.updateBio(this.user)
    .subscribe(
      () => { },
      (error:any)=>{
        if(error instanceof HttpErrorResponse)
        {
            if(error.status != 200){
              console.log(error);
              this.user.bio = oldBio;
            }
        }
      });
  }

  convertToBase64(file){
    let that = this;
    var reader = new FileReader();
    reader.readAsDataURL(file); 
    reader.onloadend = function() {
      that.imageData = reader.result.toString();
      console.log(that.imageData);
    }
  }

  checkOldPassword(){
    if(this.checkPassword == this.user.password){
      this.isErrorHidden = true;
      this.passwordCheckBtnIsDisabled = true;
    }
    else{
      this.isErrorHidden = false;
      this.errorMessage="Password is incorrect!";
    }
  }

  checkNewPasswordAndSendCode(){
    if(this.newPassword.length <= 7){
      this.isErrorHidden = false;
      this.errorMessage= "Password must have at least 8 characters!";
      return;
    }

    if(this.newPassword == this.newPasswordCheck){      
      this.feedbackService.sendCode(new Email(this.user.mail, "Your change password code", ""))
      .subscribe(() => {
        this.message = "The password change code was sent to your email!";
        this.isMessageHidden = false;
        this.isErrorHidden = true;
        this.newPasswordCheckBtnIsDisabled = true;}
      );
    }
    else{
      this.isErrorHidden = false;
      this.errorMessage= "Passwords are not the same!";
    }
  }

  сheckCode(){
    this.feedbackService.checkCode(this.code)
    .subscribe((respone: Response) => {
      if(respone.ok){
        this.message = "Your email was successufully changed!";
        this.isMessageHidden = false;
        this.codeCheckBtbIsDisabled = true;
      }
      else{
        this.errorMessage= "Incorrect code!";
        this.isErrorHidden = false;
      }
    });

  }

  closePasswordChange(){
    this.checkPassword = "";
    this.newPassword = "";
    this.newPasswordCheck = "";
    this.isErrorHidden = true;
    this.isMessageHidden = true;
    this.passwordCheckBtnIsDisabled = false;
    this.newPasswordCheckBtnIsDisabled = false;
    this.codeCheckBtbIsDisabled = false;
  }
}
