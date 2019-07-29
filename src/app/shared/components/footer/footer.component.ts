import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() currentStyle;
  @Output() styleChange: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  changeStyle(style) {
    this.styleChange.emit(style)
  }

}
