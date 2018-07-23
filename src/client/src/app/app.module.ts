import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { AnyProfileModule } from './modules/any-profile/any-profile.module';
import { AuthorisationModule } from './modules/authorisation/authorisation.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegistrationModule,
    UserProfileModule,
    AnyProfileModule,
    AuthorisationModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }