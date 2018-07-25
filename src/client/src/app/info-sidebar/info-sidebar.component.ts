import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-sidebar',
  templateUrl: './info-sidebar.component.html',
  styleUrls: ['./info-sidebar.component.css']
})
export class InfoSidebarComponent implements OnInit {

   opened: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  open(){
    this.opened = !this.opened;
    return this.opened;
  }

}
