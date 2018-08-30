import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FeedbackService } from '../services/feedback.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { User } from '../Models/user';
import { timer } from '../../../node_modules/rxjs/internal/observable/timer';
import { Email } from '../Models/email';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService, FeedbackService, NGXLogger]
})
export class RegistrationComponent implements OnInit {

  private usersToSearch = [];
  private newUser = new User();
  private repPassword: string;
  private enteredCode: string;
  private generatedCode: number;
  private errorMessage = '';
  private sendTo: Email;
  isVisibleCodeInput = false;
  private timeIt = timer(1, 10000);

  constructor(private userService: UserService, private feedbackService: FeedbackService, private router: Router, private route: ActivatedRoute, private logger: NGXLogger) { }

  ngOnInit() {
  }

  onRegister() {
    if (this.newUser.password && this.newUser.login && this.newUser.mail && this.repPassword) {
      this.usersToSearch.forEach(element => {
        if (element.mail === this.newUser.mail || element.login === this.newUser.login) {
          this.newUser.id = element.id;
        }
      });

      if (!this.newUser.id) {
        if (this.isEmail(this.newUser.mail)) {
          if ((this.newUser.password.length >= 7 &&this.newUser.password.length<=18)|| (this.newUser.login.length >= 5&&this.newUser.login.length<=18)) {
            if (this.newUser.password === this.repPassword) {
              this.generatedCode = this.randomInt(100000, 999999);
              this.newUser.register_code = String(this.generatedCode);
              this.errorMessage = '';
              this.newUser.active = true;
              this.newUser.bio = '';
              this.sendTo = new Email(this.newUser.mail, this.newUser.register_code);
              this.feedbackService.sendCode(this.sendTo)
                .subscribe();
              this.logger.debug('code for registration has been sent');
              this.isVisibleCodeInput = true;
            }
            else { 
              this.errorMessage = 'Your password and repeated password don`t match! Try again.';
              this.logger.info('not matching password and repeated password');
            }
          }
          else {
            this.errorMessage = 'Wrong length of password or login';
            this.logger.info('Wrong length of password or login');

          }
        }
        else {
          this.errorMessage = 'Please enter the email in the correct format';
          this.logger.info('Not passed email validation');
        }
      }
      else {
        this.errorMessage = 'We already have user with this email or login! Try again.';
        this.logger.info('existing user or email while registering');
      }
    }
    else {
      this.errorMessage = 'Wrong input!';
      this.logger.info('Some of the fields are empty');
    }
  }


  onConfirmCode() {
    if (this.enteredCode) {
      if (this.enteredCode === this.newUser.register_code) {
        this.logger.debug('sent and entered codes are equal');
        this.userService.createUser(this.newUser)
          .subscribe((data: User) => this.usersToSearch.push(data));
        this.logger.info('new user created');
        this.router.navigate(['/login']);
      }
      else {
        this.errorMessage = 'Entered code and sent code don`t match! Try again';
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

  isEmail(search: string): boolean {
    var serchfind: boolean;
    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    serchfind = regexp.test(search);
    return serchfind
  }


}
