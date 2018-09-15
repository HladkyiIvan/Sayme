import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FeedbackService } from '../../services/feedback.service';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { User } from '../../Models/user';
import { Email } from '../../Models/email';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService, FeedbackService, NGXLogger, TooltipModule]
})
export class RegistrationComponent implements OnInit {

  private usersToSearch = [];
  private newUser = new User();
  private password:string;
  private repPassword: string;
  private enteredCode: string;
  private errorMessage = '';
  private isErrorHidden = true;
  isTextboxesDisabled = false;
  private generatedCode;
  private sendTo: Email;
  isVisibleCodeInput = false;

  constructor(
    private userService: UserService,
    private feedbackService: FeedbackService,
    private router: Router,
    private logger: NGXLogger) { }

  ngOnInit() {
  }

  onRegister() {
    
    if (this.password && this.newUser.login && this.newUser.mail && this.repPassword) {
      this.usersToSearch.forEach(element => {
        if (element.mail === this.newUser.mail || element.login === this.newUser.login) {
          this.newUser.id = element.id;
        }
      });

      if (!this.newUser.id) {
        if (this.feedbackService.isEmail(this.newUser.mail)) {
          if ((this.password.length >= 7 && this.password.length <= 18) || (this.newUser.login.length >= 5 && this.newUser.login.length <= 20)) {
            if (this.password === this.repPassword) {
              this.isErrorHidden = true;
              this.errorMessage = '';
              this.newUser.active = true;
              this.newUser.bio = '';
              this.sendTo = new Email(this.newUser.mail,"Code for registration", "");
              this.feedbackService.sendCode(this.sendTo)
                .subscribe((code:string) => {this.logger.debug('code for registration has been sent');
                this.isVisibleCodeInput = true;
                this.isTextboxesDisabled = true;
                this.newUser.register_code = code;
                console.log(code);});
            }
            else {
              this.errorMessage = 'Your password and repeated password don`t match! Try again.';
              this.isErrorHidden = false;
              this.logger.info('not matching password and repeated password');
            }
          }
          else {
            this.errorMessage = 'Wrong length of password or login';
            this.isErrorHidden = false;
            this.logger.info('Wrong length of password or login');

          }
        }
        else {
          this.errorMessage = 'Please enter the email in the correct format';
          this.isErrorHidden = false;
          this.logger.info('Not passed email validation');
        }
      }
      else {
        this.errorMessage = 'We already have user with this email or login! Try again.';
        this.isErrorHidden = false;
        this.logger.info('existing user or email while registering');
      }
    }
    else {
      this.errorMessage = 'Wrong input!';
      this.isErrorHidden = false;
      this.logger.info('Some of the fields are empty');
    }
  }


  onConfirmCode() {
    if (this.enteredCode) {
      if (this.enteredCode == this.newUser.register_code) {
        this.isErrorHidden = true;
        this.logger.debug('sent and entered codes are equal');
        this.userService.createUser(this.newUser)
          .subscribe((data: User) => this.usersToSearch.push(data));
        this.logger.info('new user created');
        this.router.navigate(['/login']);
      }
      else {
        this.errorMessage = 'Entered code and sent code don`t match! Try again';
        this.isErrorHidden = false;
        this.logger.info('sent and entered codes are different')
      }
    }
    else {
      this.errorMessage = 'Wrong input!';
      this.logger.warn('Some of the fields are empty');
    }
  }

  loadUsers() {
    this.userService.getUsers()
      .subscribe((data: User[]) => this.usersToSearch = data);
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  


}
