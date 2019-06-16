import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CvList, CvService} from "../../../../core/services/cv.service";
import {ApiService} from "../../../../shared/services/api.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  currentBoxOnShow = 0;
  progress = 0;
  list: CvList[];
  formCV: FormGroup;

  apiError = false;
  apiErrorMessages = [];

  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder,
              private cvService : CvService,
              private apiService: ApiService) {
    this.list = this.cvService.getCVList();
    this.formCV = this.cvService.getFormCV();
    this.subscription.add(this.apiService.apiError().subscribe(({error, errors}) => {
      this.apiError = error;
      this.apiErrorMessages = errors;
    }));
  }

  ngOnInit() {
  }

  showBox(id) {
    this.currentBoxOnShow = id;
  }

  nextStage() {
    this.currentBoxOnShow = this.currentBoxOnShow === this.list.length ?
      this.currentBoxOnShow :
      this.currentBoxOnShow + 1;
  }


  submit() {
    this.cvService.submitForm(this.formCV);
  }

}
