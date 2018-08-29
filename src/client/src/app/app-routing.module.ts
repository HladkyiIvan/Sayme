import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUserBodyComponent } from './ui/about-user-body/about-user-body.component';
import { PostComponent } from './post/post.component';
import { NavigationToolsComponent } from './ui/navigation-tools/navigation-tools.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
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
    component: UserpageComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}