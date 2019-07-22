import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import { UploadProgressComponent } from './components/upload-progress/upload-progress.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {CardComponent} from "./components/card/card.component";

@NgModule({
  declarations: [
    FileUploadComponent,
    UploadProgressComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FileUploadComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ]
})
export class SharedModule { }
