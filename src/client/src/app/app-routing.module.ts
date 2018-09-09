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
<<<<<<< HEAD
    path: 'login',
    component: AuthorisationComponent,
  },
  {
    path: '',
    redirectTo: 'login',
=======
    path:'login',
    component:AuthorisationComponent,
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
      },
    {
      path:'registration',
      component:RegistrationComponent
    },
    
    {
    path: 'menu',
    component: NavigationToolsComponent,
    children: [
      {
        path: 'post',
        component: PostComponent,
      },
      {
        path: 'interesting',
        component: UserpageComponent,
      },
      {
        path: '**',
        component: UserpageComponent,
      },
      {
        path:'auth',
        redirectTo: './login',
>>>>>>> 0ee7b1cd8fef7b0d3af8246afe6b3ee8d9060769
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