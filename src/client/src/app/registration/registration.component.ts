import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FeedbackService } from '../services/feedback.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/user';
import { timer } from '../../../node_modules/rxjs/internal/observable/timer';
import { Email } from '../Models/email';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService, FeedbackService]
})
export class RegistrationComponent implements OnInit {

  private usersToSearch = [];
  private newUser = new User();
  private repPassword: string;
  private enteredCode: string;
  private generatedCode: number;
  private errorMessage = '';
  private buttonText = '';
  private sendTo: Email;
  isVisibleCodeInput = false;
  isDisabled = true;
  display = false;
  private timeIt = timer(1, 10000);

  constructor(private userService: UserService, private feedbackService: FeedbackService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.timeIt.subscribe(x => this.loadUsers());
    this.buttonText = 'Send code';
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
          if(this.newUser.password.length>=7||this.newUser.login.length>=5){
          if (this.newUser.password === this.repPassword) {
            this.generatedCode = this.randomInt(100000, 999999);
            this.newUser.register_code = String(this.generatedCode);
            this.errorMessage = '';
            this.newUser.active = true;
            this.newUser.bio = '';
            this.isDisabled = false;
            this.sendTo = new Email(this.newUser.mail, this.newUser.register_code);
            this.feedbackService.sendCode(this.sendTo)
              .subscribe();
            this.display = true;

            this.isVisibleCodeInput = true;

          }
          
          else this.errorMessage = 'Your password and repeated password don`t match! Try again.';
        }
        else this.errorMessage='Your login or password are too short';

        }
        else this.errorMessage = 'Please enter the email in the correct format';
      }
      else {
        this.errorMessage = 'We already have user with this email or login! Try again.';
      }
    }
    else this.errorMessage = 'Wrong input!';
  }


  onConfirmCode() {
    if (this.enteredCode) {
      if (this.enteredCode === this.newUser.register_code) {
        this.userService.createUser(this.newUser).
          subscribe((data: User) => this.usersToSearch.push(data));
        this.router.navigate(['/login']);
        console.log(this.newUser.login);
      }

      else this.errorMessage = 'Entered code and sent code don`t match! Try again';
    }
    else this.errorMessage = 'Wrong input!';
  }

  loadUsers() {
    this.userService.getUsers()
      .subscribe((data: User[]) => this.usersToSearch = data);

  }

  sendCode() {

  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  isEmail(search: string): boolean {
    var serchfind: boolean;

    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    serchfind = regexp.test(search);

    console.log(serchfind)
    return serchfind
  }


}
