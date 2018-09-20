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

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userId = id;
    this.loadAnotherUserPosts(id);
    this.checkSubscription();
  }  

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

}
