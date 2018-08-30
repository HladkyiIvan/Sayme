import { Component, OnInit, NgModule } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../services/feedback.service';
import { Email } from '../../Models/email';
import {LoginService} from'../../services/login.service';
import { NGXLogger } from 'ngx-logger';
import { TranslateService } from '../../services/translate.service';
import { CookieService } from 'ngx-cookie-service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-navigation-tools',
  templateUrl: './navigation-tools.component.html',
  styleUrls: ['./navigation-tools.component.css'],
  providers: [FeedbackService, NGXLogger]
})
export class NavigationToolsComponent implements OnInit {

  items: MenuItem[];
  opened: boolean = false;
  isFeedbackFormVisible: boolean = false;
  isSuccessFormVisible: boolean = false;
  feedback = new Email('','')
  feedbackText: string = ''
  useremail: string = ''
  language: string = '';

  constructor(
    private _feedbackService: FeedbackService,
    private translate: TranslateService, 
    private router: Router,
    private route: ActivatedRoute,
    private logger: NGXLogger,
    private _cookie: CookieService) { }

  ngOnInit() {
    this.selectLanguage();
  }

  //!!!FEATURE!!!
  //switching on navigationbar button`s text 
  selectLanguage(){
    var navigationItems = [];
    switch (this.language) {
      case 'ru':
        navigationItems = ['Новости', 'Интересное', 'Сказать'];
        break;
      case 'ua':
        navigationItems = ['Новини', 'Цікаве', 'Сказати'];
        break;
      default:
        navigationItems = ['News', 'Intresting', 'Say'];
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
        routerLink: 'post',
      },
      {
        label: `${navigationItems[1]}`,
        routerLink: 'interesting'
      },
      {
        label: `${navigationItems[2]}`,
        routerLink: '**'
      }

    ]
  }

  setLang(lang: string) {
    this.language = lang;
    this.selectLanguage();
    this.translate.use(lang);
    this._cookie.set('language', lang);
    console.log(this._cookie);
    
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
    if (this.feedbackText.length > 10 && this.useremail.length > 3 ) {
      this.isFeedbackFormVisible = false
      this.isSuccessFormVisible = true

      this.feedback = new Email(this.useremail, this.feedbackText)
      this._feedbackService.sendFeedback(this.feedback)
          .subscribe()
      this.logger.info('feedback was sent');
      this.feedbackText = ''
      this.useremail = ''
    }
    else this.logger.info('Wrong size of entered info in feedback');
  }


}