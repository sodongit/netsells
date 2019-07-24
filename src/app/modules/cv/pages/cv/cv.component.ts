import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CvList, CvService} from "../../../../core/services/cv.service";
import {ApiService} from "../../../../shared/services/api.service";
import {Subscription} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";


// TODO split up html into smaller components
// TODO remove animations into own ts file

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  animations: [
    trigger('boxChoice', [
      state('edit', style({
        paddingLeft: '0',
        width: '50%',
        opacity: '0.8',
        backgroundColor: 'transparent',
        border: '1px solid ',
        borderRight: '1px solid',
        borderColor: 'white',
        borderRadius: '0px 0px 0px 0px'
      })),
      state('nonedit', style({
        paddingLeft: '100%',
        width: '50%',
        opacity: '1',
        backgroundColor: '#E1FAFF',
        textAlign: 'right',
        border: '1px solid',
        borderRight: '0px solid',
        borderColor: '#b9ced2',
        borderRadius: '25px 0px 0px 25px',
      })),
      transition('nonedit => edit', [animate('375ms ease-in')]),
      transition('edit => nonedit', [animate('375ms 50ms ease-out')])
    ])
  ]
})

export class CvComponent implements OnInit {

  list;
  formCV;
  cardList;
  cardStatus = 'open';
  cardCompletion = {
    1: 2,
    2: 2,
    3: 2
  };

  stepOpen = 'step1';

  apiError = false;
  apiErrorMessages = [];

  errorMessages = [];


  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder,
              private cvService: CvService,
              private apiService: ApiService) {
    this.list = this.cvService.getCVList();
    this.formCV = this.cvService.getFormCV();
    this.cardList = this.cvService.getCardList();
    this.subscription.add(this.apiService.apiError().subscribe(({error, errors}) => {
      this.apiError = error;
      this.apiErrorMessages = errors;
    }));
  }

  ngOnInit() {

  }

  completeCard(step_id) {
    this.stepOpen = `step${step_id}`;
  this.cardStatus = 'closed';
  }


  allDirtyCheck() {
    // get the form key, check if its dirty or if not valid, return if there is a false.
    return Object.keys(this.formCV.controls)
      .map((key) => this.formCV.controls[key].dirty ? this.formCV.controls[key].dirty : this.formCV.controls[key].valid)
      .reduce((ac, cr) => ac ? cr : ac, true);
  }

  setErrorMessages() {
    // get the key for the form, filter out valid control keys, reduce all the error messages into on array
    this.errorMessages = Object.keys(this.formCV.controls)
      .filter((control) => this.formCV.controls[control].invalid)
      .reduce((ac, control) => {
        // get the error keys from the control, return the error message for the control.
        const errors = Object.keys(this.formCV.controls[control].errors)
          .map((error) => this.cvService.getControlErrorMessage(control, error));
        return [...ac, ...errors];
      }, []);
  }

  finish(){
    this.stepOpen = `step0`;
    this.cardStatus = 'open';
  }

  submit() {
    this.cvService.submitForm(this.formCV);
  }


}
