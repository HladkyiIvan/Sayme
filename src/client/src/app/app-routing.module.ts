import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoSidebarComponent } from './info-sidebar/info-sidebar.component';
import { AboutUserBodyComponent } from './about-user-body/about-user-body.component';
import { TestComponent } from './test/test.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: 'user',
    component: AboutUserBodyComponent,
  },
  {
    path: 'someone',
    component: InfoSidebarComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}