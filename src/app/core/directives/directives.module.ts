import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DigitOnlyDirective} from "./digit-only";

@NgModule({
  declarations: [DigitOnlyDirective],
  imports: [
    CommonModule
  ],
  exports: [
    DigitOnlyDirective,
  ]
})
export class DirectivesModule { }
