import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import { UploadProgressComponent } from './components/upload-progress/upload-progress.component';

@NgModule({
  declarations: [
    FileUploadComponent,
    UploadProgressComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FileUploadComponent
  ]
})
export class SharedModule { }
