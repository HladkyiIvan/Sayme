import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUserBodyComponent } from './ui/about-user-body/about-user-body.component';
import { PostComponent } from './ui/post/post.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorisationComponent } from './authorization/authorization.component';
import { UserpageComponent } from './userpage/userpage.component';
import { FollowedComponent } from './followed/followed.component';
import { FollowingComponent } from './following/following.component'

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
    path: '**',
    component: UserpageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }