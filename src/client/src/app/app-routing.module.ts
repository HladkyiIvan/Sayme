import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { AuthorisationComponent } from './modules/authorisation/authorisation.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: '',
    component: AuthorisationComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {}