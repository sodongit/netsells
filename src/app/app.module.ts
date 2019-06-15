import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WelcomeModule} from "./modules/welcome/welcome.module";
import {CvModule} from "./modules/cv/cv.module";
import {ThanksModule} from "./modules/thanks/thanks.module";
import {PageNotFoundComponent} from "./modules/404/pages/page-not-found/page-not-found.component";
import { FileUploadComponent } from './shared/components/file-upload/file-upload.component';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {DirectivesModule} from "./core/directives/directives.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    WelcomeModule,
    CvModule,
    ThanksModule,
    HttpClientModule,
    DirectivesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
