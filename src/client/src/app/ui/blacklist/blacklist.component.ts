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

  usersAndImage = [];
  idWhom: number;


  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.loadBlackList();
  }

  loadBlackList() {
    this.subscriptionService.getBlackList()
      .subscribe((data: User[]) => {
        this.usersAndImage = [];
        this.subscriptionService.blacklist = data;
        this.addImages(data);
      })
  };


  //Метод, который работает с тем, чтобы можно было выводить аватарки юзеров
  addImages(data) {

    for (let user of data) {
      if (user.avatar == null)
        this.usersAndImage.push(new UserImage(user, null));
      else
        this.usersAndImage.push(new UserImage(user, 'data:image/jpg;base64,' + user.avatar));
    }
  }

  onDeleteFromBlacklist(idWhom) {
    this.subscriptionService.deleteFromBlacklist(idWhom).subscribe(
      () => {
        this.loadBlackList()
      });
  }

}