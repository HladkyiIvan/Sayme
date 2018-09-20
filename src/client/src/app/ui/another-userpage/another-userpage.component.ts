import { Component, OnInit } from '@angular/core';
import { Post } from '../../Models/post';
import { User } from '../../Models/user';
import { BaseUserpageComponent } from '../base-userpage/base-userpage.component';
import { SubscriptionService } from '../../services/subscription.service';
import { Id } from 'app/Models/Id';

@Component({
  selector: 'app-another-userpage',
  templateUrl: './another-userpage.component.html',
  styleUrls: ['./another-userpage.component.css']
})
export class AnotherUserpageComponent extends BaseUserpageComponent implements OnInit {

  isSubscribed: boolean;
  userId: number;
  blacklisted: User[] = [];
  id: number;
  isNotInBlacklist:boolean=true;


  checkSubscription(){
    this.subService.isSubscribed(this.userId)
        .subscribe(data => this.isSubscribed = data);
  }

  subscribeOnUser(userID: number){
    this.subService.userSubscribe(new Id(userID)).subscribe();
    this.isSubscribed = true;
  }

  unsubscribeFromUser(userID: number){
    this.subService.userUnsubscribe(new Id(userID)).subscribe();
    this.isSubscribed = false;
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadBlackList();
    this.loadAnotherUserPosts(this.id);
    this.checkSubscription();
    
  }


  isNotInBlackList(id) {
    for (let blacklisted of this.blacklisted) {
      if (blacklisted.id == id)
        return false;
    }
    return true;
  }

  loadBlackList() {
    this.subService.getBlacklisted()
      .subscribe((data: User[]) => {
        this.blacklisted = data;
        if (this.isNotInBlackList(this.id)) {
          this.loadAnotherUserPosts(this.id);
        }
        else{
          this.isNotInBlacklist=false;
          this.loadAnotherUserInfoWithoutPosts(this.id);
        }
        console.log(this.blacklisted);
      })
  }


}
