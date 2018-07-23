import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorisationBodyComponent } from './authorisation-body/authorisation-body.component';

import { AuthorisationComponent } from './authorisation.component';
import { LoginRegistrationHeaderComponent } from '../../shared/login-registration-header/login-registration-header.component';
//import { FooterComponent } from '../../shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthorisationBodyComponent,
    AuthorisationComponent,  
    LoginRegistrationHeaderComponent,
    //FooterComponent
  ]
})
export class AuthorisationModule { }
