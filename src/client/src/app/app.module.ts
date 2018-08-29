import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule, DialogModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { DataViewModule } from 'primeng/dataview';

import { LoginRegistrationHeaderComponent } from './ui/login-registration-header/login-registration-header.component';
import { AboutUserBodyComponent } from './ui/about-user-body/about-user-body.component';
import { FooterComponent } from './ui/footer/footer.component';
import { PostComponent } from './ui/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationToolsComponent } from './ui/navigation-tools/navigation-tools.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationHeaderComponent,
    AboutUserBodyComponent,
    FooterComponent,
    PostComponent,
    NavigationToolsComponent,
  ],
  imports: [LoggerModule.forRoot({
    level: NgxLoggerLevel.DEBUG}),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    AccordionModule,
    SidebarModule,
    HttpClientModule,
    MenubarModule,
    MenuModule,
    DataViewModule,
    DialogModule,
  ],
  exports: [
    LoginRegistrationHeaderComponent,
    AboutUserBodyComponent,
    FooterComponent,
    NavigationToolsComponent,
    PostComponent,
    AccordionModule,
    DataViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

