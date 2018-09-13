import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import {SubscriptionService} from '../../services/subscription.service';
import { UserImage } from '../../Models/userImage';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  constructor(private subscriptionService:SubscriptionService) { }

  following=[];
  usersAndImage = [];

  ngOnInit() {
    this.loadUserFollowing();
  }


  loadUserFollowing(){
    this.subscriptionService.getFollowing(56)
    .subscribe((data:User[])=>
    {
      this.following=data;
      this.updateImages(this.following);
    })}

    updateImages(data) {
      for (let user of data) {
        if (user.avatar == null)
          this.usersAndImage.push(new UserImage(user, null));
        else
          this.usersAndImage.push(new UserImage(user, 'data:image/jpg;base64,' + user.avatar));
      }
}
}
