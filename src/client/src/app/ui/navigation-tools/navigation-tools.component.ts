import { Component, OnInit, NgModule } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../services/feedback.service';
import { Email } from '../../Models/email';
import { NGXLogger } from 'ngx-logger';

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

  constructor(
    private _feedbackService: FeedbackService, 
    private router: Router,
    private route: ActivatedRoute,
    private logger: NGXLogger) { }

  ngOnInit() {
    this.items = [
      {
        label: ' ',
        icon: 'fas fa-align-justify',
        command: (onclick) => { this.open(); }
      },
      {
        label: 'News',
        routerLink: 'post',
      },
      {
        label: 'Interesting',
        routerLink: 'interesting'
      },
      {
        label: 'Say',
        routerLink: '**'
      }
    ]
  }

  open() {
    this.opened = !this.opened;
    return this.opened;
  }

  showDialog() {
    this.isFeedbackFormVisible = true;
  }

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

  onCancelFeedBack() {
    this.isFeedbackFormVisible = false;
  }

}