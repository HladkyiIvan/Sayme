import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './modules/registration/registration.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {}