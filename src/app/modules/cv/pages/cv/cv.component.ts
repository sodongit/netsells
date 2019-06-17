import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CvList, CvService} from "../../../../core/services/cv.service";
import {ApiService} from "../../../../shared/services/api.service";
import {Subscription} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {isWhiteSpace} from "tslint";

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
        backgroundColor: 'white',
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
    ]),
    trigger('boxChoiceText', [
      state('edit', style({
        color: 'black'
      })),
      state('nonedit', style({
        width: '0',
        color: 'white',
      })),
      transition('nonedit => edit', [animate('1ms 375ms ease-in')]),
      transition('edit => nonedit', [animate('100ms  ease-out')])
    ]),
    trigger('editBoxChoice', [
      state('edit', style({
        paddingLeft: '0',
        opacity: '0'
      })),
      state('nonedit', style({
        paddingLeft: '12.5%',
        opacity: '1'
      })),
      transition('nonedit => edit', [animate('300ms 75ms ease-in')]),
      transition('edit => nonedit', [animate('375ms ease-out')])
    ]),
    trigger('editBoxChoiceContent', [
      state('edit', style({
        opacity: '0'
      })),
      state('nonedit', style({
        opacity: '1'
      })),
      transition('nonedit => edit', [animate('500ms ease-in')]),
      transition('edit => nonedit', [animate('375ms ease-out')])
    ])
  ]
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
