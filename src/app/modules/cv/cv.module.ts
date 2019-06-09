import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import {CvComponent} from "./pages/cv/cv.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    ReactiveFormsModule
  ]
})
export class CvModule { }
