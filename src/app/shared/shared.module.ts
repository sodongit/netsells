import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import { UploadProgressComponent } from './components/upload-progress/upload-progress.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {CardComponent} from "./components/card/card.component";
import { StepFormComponent } from './components/step-form/step-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FileUploadComponent,
    UploadProgressComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    StepFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    FileUploadComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    StepFormComponent,
  ]
})
export class SharedModule { }
