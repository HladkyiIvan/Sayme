import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

import { RegistrationBodyComponent } from './registration-body/registration-body.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavigationBarComponent } from '../../shared/navigation-bar/navigation-bar.component';


@NgModule({
  imports: [
    CommonModule,
    RegistrationBodyComponent,
    FooterComponent,
    NavigationBarComponent,
    AppRoutingModule,
  ],
  declarations: [
    RegistrationBodyComponent
  ]
})

export class RegistrationModule { }
