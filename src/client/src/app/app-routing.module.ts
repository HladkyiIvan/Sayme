import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './modules/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'login',
    component: NavigationBarComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule {}