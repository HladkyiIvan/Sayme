import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation-tools',
  templateUrl: './navigation-tools.component.html',
  styleUrls: ['./navigation-tools.component.css']
})
export class NavigationToolsComponent implements OnInit {

  items: MenuItem[];
  opened: boolean = false;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: ' ',
          icon: "fas fa-align-justify",
          command: (onclick)=> {this.open();}
      },
      {
          label: 'News',
          routerLink: "**"
      },
      {
          label: 'Interesting',
          routerLink: "**"
      },
      {
          label: 'Say',
          routerLink: "**"
      }]
  }

  open(){
    this.opened = !this.opened;
    return this.opened;
  }

}
