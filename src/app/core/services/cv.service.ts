import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private fb: FormBuilder,) {
  }

  private cvList = [
    {
      id: 1,
      label: 'First name',
      field_name: 'first_name',
      type: 'input',
      formControl: {first_name: ['', Validators.required]}
    },
    {id: 2, label: 'Last name', field_name: 'last_name', type: 'input', formControl: {last_name: ['']}},
    {id: 3, label: 'Email', field_name: 'email', type: 'input', formControl: {email: ['', Validators.required]}},
    {id: 4, label: 'Phone number', field_name: 'phone_number', type: 'input', formControl: {phone_number: ['']}},
    {
      id: 5,
      label: 'Do you live in the uk?',
      field_name: 'live_in_uk',
      type: 'checkbox',
      formControl: {live_in_uk: [false, Validators.required]}
    },
    {
      id: 6,
      label: 'Git profile',
      field_name: 'git_profile',
      type: 'input',
      formControl: {git_profile: ['', Validators.required]}
    },
    {id: 7, label: 'Upload CV', field_name: 'cv', type: 'file', formControl: {cv: [null, Validators.required]}},
    {
      id: 8,
      label: 'Upload Cover Letter',
      field_name: 'cover_letter',
      type: 'file',
      formControl: {cover_letter: [null]}
    },
    {
      id: 9,
      label: 'About you',
      field_name: 'about_you',
      type: 'textfield',
      formControl: {about_you: ['', Validators.required]}
    },
  ];


  getCVList = function () {
   return  this.cvList.map(({id,label,field_name,type}) => {return {id,label,field_name,type};});
  }

  getFormCV = function () {
    return this.fb.group(this.cvList.reduce((ac, cr) => {
      Object.assign(ac, cr.formControl);
      return ac;
    }, {}));
  }

}
