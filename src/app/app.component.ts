import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  style = 'style-black';


  styleChange(style) {
    this.style = `style-${style}`;
  }

}
