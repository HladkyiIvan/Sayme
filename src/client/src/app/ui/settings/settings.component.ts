import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Email } from '../../Models/email';
import { Code } from '../../Models/code';
import { HttpErrorResponse } from '@angular/common/http';
import { FeedbackService } from '../../services/feedback.service';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [UserService, FeedbackService]
})
export class SettingsComponent implements OnInit {
  @Input() user:User;
  @Output() onAvatarChange = new EventEmitter<File>();
  @Output() onBioChange = new EventEmitter<string>();
  
  passwordCheckBtnIsDisabled: boolean = false;
  newPasswordCheckBtnIsDisabled: boolean = true;
  codeCheckBtbIsDisabled: boolean = true;
  isErrorHidden: boolean = true;
  isMessageHidden: boolean = true
  errorMessage:string;
  message:string;
  code: string;
  checkPassword:string;
  newPassword:string;
  newPasswordCheck:string;
  newBio:string;

  constructor(private feedbackService: FeedbackService, private userService: UserService) { }

  ngOnInit() {
    this.newBio = this.user.bio;
    console.log(this.user);
  }

  myUploader(event, form){
    let file: File = event.files[0];
    this.userService.updateAvatar(this.user.id ,file)
      .subscribe(() => (this.onAvatarChange.emit(file))
      ,(err) => console.error(err));
    form.clear();
  }

  saveNewBio(){
    this.userService.updateBio(new Code(this.newBio))
    .subscribe(
      () => (this.onBioChange.emit(this.newBio)),
      (error:any)=>{
        if(error instanceof HttpErrorResponse)
        {
            if(error.status != 200){
              console.log(error);
            }
        }
      });
  }


  checkOldPassword(){
    this.userService.checkPassword(new Code(this.checkPassword))
    .subscribe((respone) => {
      if(respone.ok){
        this.isErrorHidden = true;
        this.passwordCheckBtnIsDisabled = true;
        this.newPasswordCheckBtnIsDisabled = false;}
      }, 
      (error: HttpErrorResponse) => {
        console.log(error);
        this.isErrorHidden = false;
        this.errorMessage="Password is incorrect!";
      });
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
        this.newPasswordCheckBtnIsDisabled = true;
        this.codeCheckBtbIsDisabled = false;}
      );
    }
    else{
      this.isErrorHidden = false;
      this.errorMessage= "Passwords are not the same!";
    }
  }

  checkCode(){
    console.log(this.code);
    this.feedbackService.checkCode(new Code(this.code))
    .subscribe((respone) => {
      if(respone.ok){
        this.isErrorHidden = true;
        this.user.password = this.newPassword;
        this.userService.updatePassword(new Code(this.newPassword))
        .subscribe((respone) => {
          if(respone.ok){
            this.message = "Your password was successufully changed!";
            this.isMessageHidden = false;
            this.codeCheckBtbIsDisabled = true;
          }
        });
      }
    }, (error: HttpErrorResponse) =>{ 
      if (error.status == 400){
        this.errorMessage= "Incorrect code!";
        this.isMessageHidden = true;
        this.isErrorHidden = false;
      }
    });
  }

  resetChanges(){
    this.checkPassword = "";
    this.newPassword = "";
    this.newPasswordCheck = "";
    this.code = "";
    this.isErrorHidden = true;
    this.isMessageHidden = true;
    this.passwordCheckBtnIsDisabled = false;
    this.newPasswordCheckBtnIsDisabled = true;
    this.codeCheckBtbIsDisabled = true;
  }

}
