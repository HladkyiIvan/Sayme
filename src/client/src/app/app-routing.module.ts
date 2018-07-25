import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent }  from './shared/shared.component';
import { InfoSidebarComponent }  from './info-sidebar/info-sidebar.component';

const routes: Routes = [
  {
    path: "**",
    component: InfoSidebarComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ ],
})

export class AppRoutingModule {}