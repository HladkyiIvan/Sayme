import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../Models/post';
import { User } from '../../Models/user';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-base-userpage',
  templateUrl: './base-userpage.component.html',
  styleUrls: ['./base-userpage.component.css'],
  providers: [PostService, UserService]
})
export class BaseUserpageComponent implements OnInit {

  posts = [];
  user = new User();
  imageData;

  ngOnInit() {
    console.log(this.user);
  }

  constructor(protected route: ActivatedRoute, 
              protected postService: PostService, 
              protected userService: UserService,
              protected subService: SubscriptionService) {
    }

  loadCurrentUserPosts() {
    this.userService.getCurrent()
      .subscribe((data: User) => {
        this.user = data;
        if (this.user.avatar != null) {
          this.imageData = 'data:image/jpg;base64,' + data.avatar;
        }
        this.getPostsFromService(data);
      }, err => console.error(err));
  }

  loadAnotherUserPosts(id: number) {
    this.userService.getUser(id)
      .subscribe((data: User) => {
        this.user = data;
        if (this.user.avatar != null) {
          this.imageData = 'data:image/jpg;base64,' + data.avatar;
        }
        this.getPostsFromService(data);
      }, err => console.error(err));
  }

  loadAnotherUserInfoWithoutPosts(id: number) {
    this.userService.getUser(id)
      .subscribe((data: User) => {
        this.user = data;
        if (this.user.avatar != null) {
          this.imageData = 'data:image/jpg;base64,' + data.avatar;
        }
      }, err=>console.error(err));
}

  getPostsFromService(user: User) {
    this.postService.getUserPosts(user.id)
      .subscribe((data: Post[]) => this.posts = data);
    this.posts.forEach(post => {
      post.is_changing = false;
    });
  }
}
