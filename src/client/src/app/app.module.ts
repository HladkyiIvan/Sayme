import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { InfoSidebarComponent } from './info-sidebar/info-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    InfoSidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
