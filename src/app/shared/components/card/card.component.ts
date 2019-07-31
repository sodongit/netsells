import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'

})
export class CardComponent implements OnInit, OnChanges {


  @Input() cardInfo;
  @Input() cardCompletion;
  @Input() cardStatus;
  @Input() stepOpen;

  @Output() stepChange: EventEmitter<number> = new EventEmitter();

  complete = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.checkCompletionStatus();
  }

  completeCard(step) {
    this.stepChange.emit(step);
  }

  checkCompletionStatus() {
    const {step, outof} = this.cardInfo;
    this.complete = this.cardCompletion['step' + step] === outof;
  }
}
