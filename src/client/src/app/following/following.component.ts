import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import {SubscriptionService} from '../services/subscription.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  constructor(private subscriptionService:SubscriptionService) { }

  following=[];

  ngOnInit() {
    this.loadUserFollowing();
  }


  loadUserFollowing(){
    this.subscriptionService.getFollowing(56)
    .subscribe((data:User[])=>{this.following=data;})};
}
