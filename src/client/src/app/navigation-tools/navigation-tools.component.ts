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
  opened: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = [
      {
          label: ' ',
          icon: "fas fa-align-justify",
          command: (onclick)=> {this.open();}
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

  open(){
    this.opened = !this.opened;
    return this.opened;
  }
}