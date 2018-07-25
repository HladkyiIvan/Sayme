import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// PrimeNG
import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api'; ???

import { LoginRegistrationHeaderComponent } from './login-registration-header/login-registration-header.component';
import { AboutUserBodyComponent } from './about-user-body/about-user-body.component';
import { FooterComponent } from './footer/footer.component';
import { InfoSidebarComponent } from './info-sidebar/info-sidebar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { TestModule } from './test/test.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationHeaderComponent,
    AboutUserBodyComponent,
    FooterComponent,
    InfoSidebarComponent,
    NavigationBarComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule, 
    TestModule,
    HttpClientModule,
  ],
  exports: [
    LoginRegistrationHeaderComponent,
    AboutUserBodyComponent,
    FooterComponent,
    InfoSidebarComponent,
    NavigationBarComponent,
    PostComponent,
    SharedModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }