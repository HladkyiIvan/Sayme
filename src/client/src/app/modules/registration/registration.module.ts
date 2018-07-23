import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationBodyComponent } from './registration-body/registration-body.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
  ],
  declarations: [
    RegistrationComponent, 
    RegistrationBodyComponent, 
  ]
})
export class RegistrationModule { }
