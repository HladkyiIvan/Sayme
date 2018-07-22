import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './registration.component';
import { RegistrationBodyComponent } from './registration-body/registration-body.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    RegistrationComponent, 
    RegistrationBodyComponent, 
  ]
})
export class RegistrationModule { }
