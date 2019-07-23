import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() cardInfo;
  @Input() cardCompletion;
  @Input() cardStatus;
  @Input() stepOpen;

  @Output() stepChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  completeCard(step_id) {
    this.stepChange.emit(step_id);
  }
}
