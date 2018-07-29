import { Component, OnInit, NgModule } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';



@Component({
  selector: 'app-navigation-tools',
  templateUrl: './navigation-tools.component.html',
  styleUrls: ['./navigation-tools.component.css']
})
export class NavigationToolsComponent implements OnInit {

  items: MenuItem[];
  isOpened: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = [
      {
          icon: "fas fa-align-justify",
          command: (onclick)=> {this.openCloseSidebar();}
      },
      {
          label: 'News',
          routerLink: 'post'
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

  openCloseSidebar(){
    this.isOpened = !this.isOpened;
    return this.isOpened;
  }
}