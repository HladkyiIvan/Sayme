import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { AuthorisationModule } from './modules/authorisation/authorisation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegistrationModule,
    AuthorisationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }