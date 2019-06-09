import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {CvService} from "../../../../core/services/cv.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  currentBoxOnShow = 1;

  list;
  formCV: FormGroup;

  constructor(private fb: FormBuilder,
              private cvService : CvService) {
    this.list = this.cvService.getCVList();
    this.formCV = this.cvService.getFormCV()
  }

  ngOnInit() {
  }

  showBox(id) {
    this.currentBoxOnShow = id;
  }

  test() {
    console.log(this.formCV);
  }

}
