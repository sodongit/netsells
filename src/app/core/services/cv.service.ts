import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

export interface CvList  {
  id: number,
  label:string,
  field_name:string,
  type: string,
  description: string
}



interface FullList extends CvList{
  formControl: any
}


@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private fb: FormBuilder) {
  }

  private _cvList: FullList[]= [
    {
      id: 0,
      label: 'First name',
      field_name: 'first_name',
      type: 'input',
      description: 'Please enter your first name.',
      formControl: {first_name: ['', Validators.required]}
    },
    {
      id: 01,
      label: 'Last name',
      field_name: 'last_name',
      type: 'input',
      description: 'Please enter your last name.',
      formControl: {last_name: ['']}
    },
    {
      id: 2,
      label: 'Email',
      field_name: 'email',
      type: 'input',
      description: 'Please enter a valid email address.',
      formControl: {email: ['', Validators.required]}
    },
    {
      id: 3,
      label: 'Phone number',
      field_name: 'phone_number',
      type: 'input',
      description: 'Please enter the phone number we can contact you on.',
      formControl: {phone_number: ['']}
    },
    {
      id: 4,
      label: 'Do you live in the uk?',
      field_name: 'live_in_uk',
      type: 'checkbox',
      description: 'Are you a current resident of the uk?',
      formControl: {live_in_uk: [false, Validators.required]}
    },
    {
      id: 5,
      label: 'Git profile',
      field_name: 'git_profile',
      type: 'input',
      description: 'Please enter your git profile name',
      formControl: {git_profile: ['', Validators.required]}
    },
    {id: 6,
      label: 'Upload CV',
      field_name: 'cv',
      type: 'file',
      description: 'Please upload a current cv',
      formControl: {cv: [null, Validators.required]}},
    {
      id: 7,
      label: 'Upload Cover Letter',
      field_name: 'cover_letter',
      type: 'file',
      description: 'Please upload a cover letter.',
      formControl: {cover_letter: [null]}
    },
    {
      id: 8,
      label: 'About you',
      field_name: 'about_you',
      type: 'textfield',
      description: 'Now tell us something about yourself.',
      formControl: {about_you: ['', Validators.required]}
    },
  ];

  getCVList(): CvList[] {
    return this._cvList.map(({id, label, field_name, type, description}) => {
      return {id, label, field_name, type, description};
    });
  }

  getFormCV(): FormGroup {
    return this.fb.group(this._cvList.reduce((ac, cr) => {
      Object.assign(ac, cr.formControl);
      return ac;
    }, {}));
  }

  submitForm(form) {

  }
}
