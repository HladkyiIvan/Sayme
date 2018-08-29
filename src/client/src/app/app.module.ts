import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule, DialogModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { DataViewModule } from 'primeng/dataview';
import { FileUploadModule } from 'primeng/fileupload';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { LoginRegistrationHeaderComponent } from './ui/login-registration-header/login-registration-header.component';
import { AboutUserBodyComponent } from './ui/about-user-body/about-user-body.component';
import { FooterComponent } from './ui/footer/footer.component';
import { PostComponent } from './ui/post/post.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationToolsComponent } from './ui/navigation-tools/navigation-tools.component';
import { AuthorisationComponent } from './authorization/authorization.component';
import {UserService} from './services/user.service';
import { RegistrationComponent } from './registration/registration.component';
import {Interceptor} from './interceptor/interceptor';
import { UserpageComponent } from './userpage/userpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationHeaderComponent,
    AboutUserBodyComponent,
    FooterComponent,
    PostComponent,
    NavigationToolsComponent,
    UserpageComponent,
    AuthorisationComponent,
    RegistrationComponent,
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
    InputTextareaModule,
    FileUploadModule    
  ],
  exports: [
    LoginRegistrationHeaderComponent,
    AboutUserBodyComponent,
    FooterComponent,
    NavigationToolsComponent,
    PostComponent,
    AccordionModule,
    DataViewModule,
    UserpageComponent
  ],
  providers: [UserService, CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

