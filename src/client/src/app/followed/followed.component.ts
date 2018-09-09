import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import {SubscriptionService} from '../services/subscription.service';

@Component({
  selector: 'app-followed',
  templateUrl: './followed.component.html',
  styleUrls: ['./followed.component.css'],
  providers:[SubscriptionService]
})
export class FollowedComponent implements OnInit {

  followed=[];

constructor(private subscriptionService:SubscriptionService) { }

  ngOnInit() {
    this.loadUserFollowed();
  }

  loadUserFollowed(){
this.subscriptionService.getFollowed(56)
.subscribe((data:User[])=>{this.followed=data;})};
  
onShow(){
  console.log(this.followed);
  }
  
}


