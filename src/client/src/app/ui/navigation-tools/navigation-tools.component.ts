import { Component, OnInit, NgModule } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { FeedbackService } from '../../services/feedback.service';
import { Email } from '../../Models/email';
import { NGXLogger } from 'ngx-logger';
import { TranslateService } from '../../services/translate.service';
import { User } from '../../Models/user';
import { TranslatePipe } from '../../translate.pipe';
import {TokenService} from '../../services/token.service';

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
  user: User;
  username:string;
  language: string = localStorage.getItem('language');

  constructor(
    private _feedbackService: FeedbackService,
    private translate: TranslateService, 
    private translPipe: TranslatePipe,
    private router: Router,
    private logger: NGXLogger,
    private tokenService:TokenService,
  ) { }

  ngOnInit() {
    if(!localStorage.getItem('language')){
      this.setLang('en');
    }
    else {
      this.setLang(this.language);
    }
    this.username=localStorage.getItem('curUser');
  }

  signOut(){
    this.tokenService.token=''; 
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  //!!!FEATURE!!!
  //switching on navigationbar button`s text 
  selectLanguage(){
    var navigationItems = [];
    switch (this.language) {
      case 'ru':
        navigationItems = ['Новости', 'Интересное', 'Сказать', 'Подписчики', 'Читаю'];
        break;
      case 'ua':
        navigationItems = ['Новини', 'Цікаве', 'Сказати', 'Підписники', 'Читаю'];
        break;
      default:
        navigationItems = ['News', 'Intresting', 'Say', 'Followed', 'Following'];
        break;
    }
    this.items = [
      {
        label: ' ',
        icon: 'fas fa-align-justify',
        command: (onclick) => { this.open(); }
      },
      {
        label: `${navigationItems[0]}`,
        command:(onclick)=>{this.router.navigate(['/post'])}
      },
      {
        label: `${navigationItems[1]}`,
        command:(onclick)=>{this.router.navigate(['/interesting'])}
      },
      {
        label: `${navigationItems[2]}`,
        command:(onclick)=>{this.router.navigate(['/**']);}
      },
    ]
  }

  //param --lang-- is a shortcut like one of those: 'ru', 'en' or 'ua' etc.
  setLang(lang: string) {
    console.log(lang);
    this.language = lang;
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    this.selectLanguage();
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