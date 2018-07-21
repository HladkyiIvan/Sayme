import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './registration.component';
import { RegistrationBodyComponent } from './registration-body/registration-body.component';
import { NavigationBarComponent } from '../../shared/navigation-bar/navigation-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RegistrationComponent, 
    RegistrationBodyComponent, 
    NavigationBarComponent,
    FooterComponent,
  ]
})
export class RegistrationModule { }
