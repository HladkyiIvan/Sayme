import { Component, OnInit, NgModule } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { FeedbackService } from '../../services/feedback.service';
import { Email } from '../../Models/email';
import { LoginService } from'../../services/login.service';
import { NGXLogger } from 'ngx-logger';
import { TranslateService } from '../../services/translate.service';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { TranslatePipe } from '../../translate.pipe';

@Component({
  selector: 'app-navigation-tools',
  templateUrl: './navigation-tools.component.html',
  styleUrls: ['./navigation-tools.component.css'],
  providers: [FeedbackService, NGXLogger, TranslatePipe]
})
export class NavigationToolsComponent implements OnInit {

  items: MenuItem[];
  opened: boolean = false;
  isFeedbackFormVisible: boolean = false;
  isSuccessFormVisible: boolean = false;
  feedback = new Email('','','');
  feedbackText: string = '';
<<<<<<< HEAD
  username:string;
  user:User;
  language: string = '';
=======
  user: User;
  language: string = localStorage.getItem('language');
>>>>>>> 0ee7b1cd8fef7b0d3af8246afe6b3ee8d9060769

  constructor(
    private _feedbackService: FeedbackService,
    private translate: TranslateService, 
    private translPipe: TranslatePipe,
    private router: Router,
    private logger: NGXLogger,
    private userService: UserService,
    private loginService:LoginService) { }

  ngOnInit() {
    if(!localStorage.getItem('language')){
      this.setLang('en');
    }
<<<<<<< HEAD
    else{
      this.setLang(localStorage.getItem('language'));
    }
    this.selectLanguage();
    this.username=localStorage.getItem('curUser');
  }


  // loadCurUser(){
  //   this.userService.getCurrent()
  //   .subscribe((data: User) => {
  //     this.user = data;})
  // }
=======
    else {
      this.setLang(this.language);
    }
    this.loadCurUser();
  }

  loadCurUser(){
    this.userService.getCurrent()
      .subscribe((data: User) => {
        this.user = data;
    })
  }
>>>>>>> 0ee7b1cd8fef7b0d3af8246afe6b3ee8d9060769

  signOut(){
    this.loginService.token=''; 
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  setNavPanelLang(){
    this.items = [
      {
        label: ' ',
        icon: 'fas fa-align-justify',
        command: (onclick) => { this.open(); }
      },
      {
<<<<<<< HEAD
        label: `${navigationItems[0]}`,
        command:(onclick)=>{this.router.navigate(['/post']);}
      },
      {
        label: `${navigationItems[1]}`,
        command:(onclick)=>{this.router.navigate(['/interesting']);}
      },
      {
        label: `${navigationItems[2]}`,
        command:(onclick)=>{this.router.navigate(['/**']);}
      },
      {
        label: 'followed',
        command:(onclick)=>{this.router.navigate(['/followed']);}
      },
      {
        label: 'following',
        command:(onclick)=>{this.router.navigate(['/following']);}
=======
        label: this.translPipe.transform('News'),
        routerLink: 'post',
      },
      {
        label: this.translPipe.transform('Interesting'),
        routerLink: 'interesting'
      },
      {
        label: this.translPipe.transform('Say'),
        routerLink: '**'
>>>>>>> 0ee7b1cd8fef7b0d3af8246afe6b3ee8d9060769
      }
    ]
  }

  //param --lang-- is a shortcut like one of those: 'ru', 'en' or 'ua' etc.
  setLang(lang: string) {
    console.log(lang);
    this.language = lang;
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    this.setNavPanelLang();
  }

  ///opens sidebar with user info
  open() {
    this.opened = !this.opened;
    return this.opened;
  }

  //shows feedback dialog
  showDialog() {
    this.isFeedbackFormVisible = true;
  }
  
  //closes feedback dialog (info saves)
  onCancelFeedBack() {
    this.isFeedbackFormVisible = false;
  }

  //send feedback to server
  onSendFeedback() {
    if (this.feedbackText.length > 10  ) {
      this.isFeedbackFormVisible = false
      this.isSuccessFormVisible = true

      this.feedback = new Email(this.user.mail, "Feedback from Sayme", this.feedbackText)
      this._feedbackService.sendFeedback(this.feedback)
          .subscribe()
      this.logger.info('feedback was sent');
      this.feedbackText = ''
    }
    else this.logger.info('Wrong size of entered info in feedback');
  }
}