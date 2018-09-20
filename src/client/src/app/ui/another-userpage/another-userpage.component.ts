import { Component, OnInit } from '@angular/core';
import { Post } from '../../Models/post';
import { User } from '../../Models/user';
import { BaseUserpageComponent } from '../base-userpage/base-userpage.component';

@Component({
  selector: 'app-another-userpage',
  templateUrl: './another-userpage.component.html',
  styleUrls: ['./another-userpage.component.css']
})
export class AnotherUserpageComponent extends BaseUserpageComponent implements OnInit {

  blacklisted: User[] = [];
  id: number;
  isNotInBlacklist:boolean=true;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadBlackList();
   
    
  }


  isNotInBlackList(id) {
    for (let blacklisted of this.blacklisted) {
      if (blacklisted.id == id)
        return false;
    }
    return true;
  }

  loadBlackList() {
    this.subscriptionService.getBlacklisted()
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
