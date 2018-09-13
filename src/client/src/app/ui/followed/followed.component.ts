import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { SubscriptionService } from '../../services/subscription.service';
import { UserImage } from '../../Models/userImage';

@Component({
  selector: 'app-followed',
  templateUrl: './followed.component.html',
  styleUrls: ['./followed.component.css'],
  providers: [SubscriptionService]
})
export class FollowedComponent implements OnInit {

  followed = [];
  usersAndImage = [];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.loadUserFollowed();
  }

  loadUserFollowed() {
    this.subscriptionService.getFollowed()
      .subscribe((data: User[]) => { 
        this.followed = data;
        this.updateImages(this.followed);
       })
  };

  updateImages(data) {
    for (let user of data) {
      if (user.avatar == null)
        this.usersAndImage.push(new UserImage(user, null));
      else
        this.usersAndImage.push(new UserImage(user, 'data:image/jpg;base64,' + user.avatar));
    }

  }

}
