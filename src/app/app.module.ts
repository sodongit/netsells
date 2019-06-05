import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './app/modules/welcom/pages/pages.component';
import { WelcomeComponent } from './modules/welcom/pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
