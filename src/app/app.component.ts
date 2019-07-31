import {Component} from '@angular/core';
import {CvService} from "./core/services/cv.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  style = 'black';
  pageBackground = '';

  pageClass = '';

  constructor(private cvService: CvService) {

    cvService.pageBackground.subscribe((type) => {
      this.pageBackground = type;
      this.setBackgroundClass();
    })
  }

  styleChange(style) {
    this.style = style;
    this.setBackgroundClass();
  }

  private setBackgroundClass() {
    this.pageClass = `${this.pageBackground}-${this.style} style-${this.style}`
  }
}
