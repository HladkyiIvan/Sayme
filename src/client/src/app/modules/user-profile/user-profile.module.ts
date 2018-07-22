import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule
  ],
  declarations: [UserProfileComponent, CreatePostComponent]
})
export class UserProfileModule { }
