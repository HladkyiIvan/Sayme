import { Component, OnInit, NgModule } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-tools',
  templateUrl: './navigation-tools.component.html',
  styleUrls: ['./navigation-tools.component.css']
})
export class NavigationToolsComponent implements OnInit {

  items: MenuItem[];
  opened: boolean = false;
  display1: boolean = false;
  display2: boolean = false;
  feedbackText = '';
  useremail = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = [
      {
        label: ' ',
        icon: "fas fa-align-justify",
        command: (onclick) => { this.open(); }
      },
      {
        label: 'News',
        routerLink: 'post',
      },
      {
        label: 'Interesting',
        routerLink: "interesting"
      },
      {
        label: 'Say',
        routerLink: "**"
      }
    ]
  }

  open() {
    this.opened = !this.opened;
    return this.opened;
  }

  showDialog() {
    this.display1 = true;
  }

  onSendFeedback() {
    if (this.feedbackText.length > 10 && this.useremail.length > 3 ) {
      this.display1 = false;
      this.display2 = true;
      this.feedbackText = '';
      this.useremail = '';
    }
  }

  onCancelFeedBack() {
    this.display1 = false;
  }

}