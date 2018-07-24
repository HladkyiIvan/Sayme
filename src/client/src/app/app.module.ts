import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { AnyProfileModule } from './modules/any-profile/any-profile.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegistrationModule,
    UserProfileModule,
    AnyProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }