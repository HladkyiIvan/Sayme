//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//primeng
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule, DialogModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { DataViewModule } from 'primeng/dataview';
import { FileUploadModule } from 'primeng/fileupload';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TooltipModule} from 'primeng/tooltip';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ModalModule } from 'ngx-bootstrap/modal';

//project
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUserBodyComponent } from './ui/about-user-body/about-user-body.component';
import { PostComponent } from './ui/post/post.component';
import { NavigationToolsComponent } from './ui/navigation-tools/navigation-tools.component';
import { TranslatePipe } from './translate.pipe';
import { TranslateService } from './services/translate.service';
import { AuthorisationComponent } from './ui/authorization/authorization.component';
import { UserService} from './services/user.service';
import { RegistrationComponent } from './ui/registration/registration.component';
import { Interceptor} from './interceptor/interceptor';
import { UserpageComponent } from './ui/userpage/userpage.component';
import { FollowedComponent } from './ui/followed/followed.component';
import {SubscriptionService} from './services/subscription.service';
import { FollowingComponent } from './ui/following/following.component';
import { SettingsComponent } from './ui/settings/settings.component';
import { BlacklistComponent } from './ui/blacklist/blacklist.component';
import { BaseUserpageComponent } from './ui/base-userpage/base-userpage.component';
import { AnotherUserpageComponent } from './ui/another-userpage/another-userpage.component';
import { NewsComponent } from './ui/news/news.component';
import { CommentComponent } from './ui/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUserBodyComponent,
    PostComponent,
    NavigationToolsComponent,
    TranslatePipe,
    UserpageComponent,
    AuthorisationComponent,
    RegistrationComponent,
    FollowedComponent,
    FollowingComponent,
    SettingsComponent,
    BlacklistComponent,
    BaseUserpageComponent,
    AnotherUserpageComponent,
    NewsComponent,
    CommentComponent,
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
    TooltipModule,
    DataViewModule,
    DialogModule,
    InputTextareaModule,
    FileUploadModule,
    TabViewModule,
    ModalModule.forRoot()  
  ],
  exports: [
    AboutUserBodyComponent,
    NavigationToolsComponent,
    PostComponent,
    AccordionModule,
    DataViewModule,
    UserpageComponent,
    TooltipModule,
    FollowedComponent,
    SplitButtonModule 
  ],
  providers: [UserService, CookieService,SubscriptionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [    
    CommentComponent
  ],
})
export class AppModule { }

export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use('en');
}