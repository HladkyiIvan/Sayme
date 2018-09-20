import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUserBodyComponent } from './ui/about-user-body/about-user-body.component';
import { PostComponent } from './ui/post/post.component';
import { RegistrationComponent } from './ui/registration/registration.component';
import { AuthorisationComponent } from './ui/authorization/authorization.component';
import { UserpageComponent } from './ui/userpage/userpage.component';
import { FollowingComponent } from './ui/following/following.component'
import { FollowedComponent } from './ui/followed/followed.component'
import { BlacklistComponent } from './ui/blacklist/blacklist.component';
import { AnotherUserpageComponent } from './ui/another-userpage/another-userpage.component';
import {NewsComponent} from './ui/news/news.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthorisationComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path:'blacklist',
    component:BlacklistComponent
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path: 'interesting',
    component: AboutUserBodyComponent,
  },
  {
    path: 'followed',
    component: FollowedComponent,
  },
  {
    path: 'following',
    component: FollowingComponent,
  },
  {
    path: 'user/:id', 
    component: AnotherUserpageComponent,
  },
  {
    path: '**',
    component: UserpageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }