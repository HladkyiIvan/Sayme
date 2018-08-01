import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule, DialogModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { DataViewModule } from 'primeng/dataview';

import { LoginRegistrationHeaderComponent } from './login-registration-header/login-registration-header.component';
import { AboutUserBodyComponent } from './about-user-body/about-user-body.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { TestModule } from './test/test.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigationToolsComponent } from './navigation-tools/navigation-tools.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationHeaderComponent,
    AboutUserBodyComponent,
    FooterComponent,
    PostComponent,
    NavigationToolsComponent,
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
    SidebarModule,
    SharedModule, 
    TestModule,
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
    SharedModule,
    AccordionModule,
    DataViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }