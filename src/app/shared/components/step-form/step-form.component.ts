import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss']
})
export class StepFormComponent implements OnInit {


  @Input() formStep;
  @Input() list;

  progress;
  constructor() { }

  ngOnInit() {
  }
}
