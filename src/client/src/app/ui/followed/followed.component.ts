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

  usersAndImage = [];


  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.loadBlackList();
    this.loadUserFollowed();
  }

  loadUserFollowed() {
    
    this.subscriptionService.getFollowed()
      .subscribe((data: User[]) => {
        this.usersAndImage = [];
        this.loadBlackList();
        this.addImages(data);
      })
  };

  loadBlackList() {
    this.subscriptionService.getBlackList()
      .subscribe((data: User[]) => {
        this.subscriptionService.blacklist = data;
      })
  };



  addImages(data) {
    let isInBlacklist: boolean = false;
    var usersInBlacklist = this.subscriptionService.blacklist;
    for (let user of data) {
      isInBlacklist = false;
      for (let blockedUser of usersInBlacklist) {
        if (user.id === blockedUser.id) isInBlacklist = true;
      }
      if (!isInBlacklist) {

        if (user.avatar === null)
          this.usersAndImage.push(new UserImage(user, null));
        else
          this.usersAndImage.push(new UserImage(user, 'data:image/jpg;base64,' + user.avatar));
      }
    }
  }

  onAddToBlacklist(idWhom) {
    console.log(idWhom);
    this.subscriptionService.addToBlackList(idWhom)
      .subscribe(
        () => {
          this.loadBlackList();
          this.loadUserFollowed();
        });

  }

}
