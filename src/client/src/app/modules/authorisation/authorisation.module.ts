import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorisationBodyComponent } from './authorisation-body/authorisation-body.component';
import { AuthorisationComponent } from './authorisation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthorisationBodyComponent,
    AuthorisationComponent,  
  ]
})
export class AuthorisationModule { }
