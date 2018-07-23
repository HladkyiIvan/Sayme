import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { AboutUserBodyComponent } from './about-user-body/about-user-body.component';
import { FooterComponent } from './footer/footer.component';
import { InfoSidebarComponent } from './info-sidebar/info-sidebar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PostComponent } from './post/post.component';
import { LoginRegistrationHeaderComponent } from './login-registration-header/login-registration-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent,
    AboutUserBodyComponent,
    FooterComponent,
    InfoSidebarComponent,
    NavigationBarComponent,
    PostComponent,
    LoginRegistrationHeaderComponent,
  ],
  exports: [
    AboutUserBodyComponent,
    FooterComponent,
    NavigationBarComponent,
    InfoSidebarComponent,
    PostComponent,
    LoginRegistrationHeaderComponent
  ]
})
export class SharedModule { }
