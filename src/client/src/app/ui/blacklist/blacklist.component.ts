import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { SubscriptionService } from '../../services/subscription.service';
import { UserImage } from '../../Models/userImage';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  blacklist = [];
  usersAndImage = [];
  idWhom:number;


  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.loadBlackList();
  }

  loadBlackList() {
    this.subscriptionService.getBlackList()
      .subscribe((data: User[]) => { 
        this.blacklist = data;
        this.updateImages(this.blacklist);
        console.log(data)
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

  onBlacklist(){
    this.subscriptionService.addToBlackList(this.idWhom).subscribe();
  }

}
