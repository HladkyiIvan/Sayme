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
  @Input() newBio:string;
  @Output() onAvatarChange = new EventEmitter<File>();
  @Output() onBioChange = new EventEmitter<string>();
  
  oldDataCheckBtnIsDisabled: boolean = false;
  newDataCheckBtnIsDisabled: boolean = true;
  codeCheckBtbIsDisabled: boolean = true;
  isErrorHidden: boolean = true;
  isMessageHidden: boolean = true
  errorMessage:string;
  message:string;
  code: string;
  oldDataCheck:string;
  newData:string;
  newDataCheck:string;

  constructor(private feedbackService: FeedbackService, private userService: UserService) { }

  ngOnInit() {
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
    this.userService.checkPassword(new Code(this.oldDataCheck))
    .subscribe((respone) => {
      if(respone.ok){
        this.isErrorHidden = true;
        this.oldDataCheckBtnIsDisabled = true;
        this.newDataCheckBtnIsDisabled = false;}
      }, 
      (error: HttpErrorResponse) => {
        console.log(error);
        this.isErrorHidden = false;
        this.errorMessage="Input is incorrect";
      });
  }

  checkOldEmail(){
    this.userService.checkOldEmail(new Code(this.oldDataCheck))
    .subscribe((respone) => {
      if(respone.ok){
        this.isErrorHidden = true;
        this.oldDataCheckBtnIsDisabled = true;
        this.newDataCheckBtnIsDisabled = false;}
      }, 
      (error: HttpErrorResponse) => {
        console.log(error);
        this.isErrorHidden = false;
        this.errorMessage="Input is incorrect";
      });
  }

  checkNewPasswordAndSendCode(){
    if(this.newData.length <= 7){
      this.isErrorHidden = false;
      this.errorMessage= "Password must have at least 8 characters!";
      return;
    }

    if(this.newData == this.newDataCheck){     
      this.feedbackService.sendCode(new Email(this.user.mail, "Your change password code", ""))
      .subscribe(() => {
        this.message = "The password change code was sent to your email!";
        this.isMessageHidden = false;
        this.isErrorHidden = true;
        this.newDataCheckBtnIsDisabled = true;
        this.codeCheckBtbIsDisabled = false;}
      );
    }
    else{
      this.isErrorHidden = false;
      this.errorMessage= "Passwords are not the same!";
    }
  }

  checkNewEmailAndSendCode(){
    if(!this.feedbackService.isEmail(this.newData)){
      this.isErrorHidden = false;
      this.errorMessage= "Email was inputed incorrectly!";
      return;
    }

    if(this.newData == this.newDataCheck){
      this.userService.checkNewEmail(new Code(this.newData))
      .subscribe((respone) => {
        if(respone.ok){
          this.feedbackService.sendCode(new Email(this.newData, "Your change email code", ""))
          .subscribe(() => {
            this.message = "The email change code was sent to your email!";
            this.isMessageHidden = false;
            this.isErrorHidden = true;
            this.newDataCheckBtnIsDisabled = true;
            this.codeCheckBtbIsDisabled = false;}
          );}
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.isErrorHidden = false;
        this.errorMessage= "User with this email already exists!";
      })      
    }
    else{
      this.isErrorHidden = false;
      this.errorMessage= "Emails are not the same!";
    }
  }

  checkCodeAndUpdatePassword(){
    console.log(this.code);
    this.feedbackService.checkCode(new Code(this.code))
    .subscribe((respone) => {
      if(respone.ok){
        this.sendPasswordChangeRequest();
      }
    }, (error: HttpErrorResponse) =>{ 
      if (error.status == 400){
        this.showCodeError();
      }
    });
  }

  checkCodeAndUpdateEmail(){
    console.log(this.code);
    this.feedbackService.checkCode(new Code(this.code))
    .subscribe((respone) => {
      if(respone.ok){
        this.sendEmailChangeRequest();
      }
    }, (error: HttpErrorResponse) =>{ 
      if (error.status == 400){
        this.showCodeError();
      }
    });
  }

  resetChanges(){
    this.oldDataCheck = "";
    this.newData = "";
    this.newDataCheck = "";
    this.code = "";
    this.isErrorHidden = true;
    this.isMessageHidden = true;
    this.oldDataCheckBtnIsDisabled = false;
    this.newDataCheckBtnIsDisabled = true;
    this.codeCheckBtbIsDisabled = true;
  }

  sendPasswordChangeRequest(){
    this.isErrorHidden = true;
    this.user.password = this.newData;
    this.userService.updatePassword(new Code(this.newData))
      .subscribe((respone) => {
        if(respone.ok){
          this.message = "Your password was successufully changed!";
          this.isMessageHidden = false;
          this.codeCheckBtbIsDisabled = true;
        }
    });
  }

  sendEmailChangeRequest(){
    this.isErrorHidden = true;
    this.user.mail = this.newData;
    console.log(this.newData);
    this.userService.updateEmail(new Code(this.newData))
      .subscribe((respone) => {
        if(respone.ok){
          this.message = "Your email was successufully changed!";
          this.isMessageHidden = false;
          this.codeCheckBtbIsDisabled = true;
        }
    });
  }

  showCodeError(){
    this.errorMessage= "Incorrect code!";
    this.isMessageHidden = true;
    this.isErrorHidden = false;
  }

}
