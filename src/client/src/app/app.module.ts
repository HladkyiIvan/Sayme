import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';

import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';

import { LoginRegistrationHeaderComponent } from './login-registration-header/login-registration-header.component';
import { AboutUserBodyComponent } from './about-user-body/about-user-body.component';
import { FooterComponent } from './footer/footer.component';
import { InfoSidebarComponent } from './info-sidebar/info-sidebar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationHeaderComponent,
    AboutUserBodyComponent,
    FooterComponent,
    InfoSidebarComponent,
    NavigationBarComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ButtonModule,
    AccordionModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }