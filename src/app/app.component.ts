import {Component} from '@angular/core';
import {CvService} from "./core/services/cv.service";
import {ThemeService} from "./theme/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  style = 'black';
  pageBackground = '';

  pageClass = '';

  constructor(private cvService: CvService,
              private themeService: ThemeService) {

    cvService.pageBackground.subscribe((type) => {
      this.pageBackground = type;
      this.setBackgroundClass();
    })
  }

  styleChange(event) {
    event === 'black' ? this.themeService.setDarkTheme() :
      this.themeService.setLightTheme();
    this.style = event;
  }

  private setBackgroundClass() {
    this.pageClass = `${this.pageBackground}-${this.style} style-${this.style}`
  }
}
