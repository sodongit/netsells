import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './modules/welcome/pages/welcome/welcome.component';
import {WelcomeModule} from "./modules/welcome/welcome.module";
import { PageNotFoundComponent } from './modules/404/pages/page-not-found/page-not-found.component';
import { CvComponent } from './modules/cv/pages/cv/cv.component';
import {CvModule} from "./modules/cv/cv.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    CvModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
