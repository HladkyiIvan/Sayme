import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUserBodyComponent } from './ui/about-user-body/about-user-body.component';
import { PostComponent } from './post/post.component';
import { NavigationToolsComponent } from './ui/navigation-tools/navigation-tools.component';

import { AuthorisationComponent } from './authorization/authorization.component';

const routes: Routes = [
  {
    path:'login',
    component:AuthorisationComponent,
    },
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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
        component: AboutUserBodyComponent,
      },
      {
        path: '**',
        component: PostComponent,
      },
      {
        path:'auth',
        redirectTo: './login',
    pathMatch: 'full',
      }

    ]
    },
    {
    path: '**',
    redirectTo: 'menu'
    },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}