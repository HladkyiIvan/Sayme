import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './modules/registration/registration.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { AppComponent } from './app.component';
import { AnyProfileComponent } from './modules/any-profile/any-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'someone',
    component: AnyProfileComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'user',
    component: UserProfileComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {}