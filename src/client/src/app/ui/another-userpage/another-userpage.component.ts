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


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loadAnotherUserPosts(id);
  }

}
