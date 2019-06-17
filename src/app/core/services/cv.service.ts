import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileType} from "../validators/file-validator";
import {ApiCallService} from "./api-call.service";
import {PhoneNumber} from "../validators/phone-number-validator";
import {GitUrl} from "../validators/gitUrl";

export interface CvList {
  id: number,
  label: string,
  field_name: string,
  type: string,
  description: string
}


interface FullList extends CvList {
  formControl: any
}


@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private fb: FormBuilder,
              private apiCall: ApiCallService) {
  }

  private _cvList: FullList[] = [
    {
      id: 0,
      label: 'First name',
      field_name: 'first_name',
      type: 'text',
      description: 'Please enter your first name.',
      formControl: ['', [Validators.required, Validators.minLength(2)]]
    },
    {
      id: 1,
      label: 'Last name',
      field_name: 'last_name',
      type: 'text',
      description: 'Please enter your last name.',
      formControl: ['']
    },
    {
      id: 2,
      label: 'Email',
      field_name: 'email',
      type: 'email',
      description: 'Please enter a valid email address.',
      formControl: ['', [Validators.required, Validators.email]]
    },
    {
      id: 3,
      label: 'Phone number',
      field_name: 'phone_number',
      type: 'number',
      description: 'Please enter the phone number we can contact you on.',
      formControl: ['']
    },
    {
      id: 4,
      label: 'Do you live in the uk?',
      field_name: 'live_in_uk',
      type: 'checkbox',
      description: 'Are you a current resident of the uk?',
      formControl: [false, Validators.required]
    },
    {
      id: 5,
      label: 'Git profile url',
      field_name: 'git_profile',
      type: 'text',
      description: 'Please enter your git profile url',
      formControl: ['', [Validators.required, GitUrl()]]
    },
    {
      id: 6,
      label: 'Upload CV',
      field_name: 'cv',
      type: 'file',
      description: 'Please upload a current cv',
      formControl: [{name: ''}, [Validators.required, FileType(['txt', 'docx', 'pdf'])]]
    },
    {
      id: 7,
      label: 'Upload Cover Letter',
      field_name: 'cover_letter',
      type: 'file',
      description: 'Please upload a cover letter.',
      formControl: [{name: ''}, FileType(['txt', 'docx', 'pdf'])]
    },
    {
      id: 8,
      label: 'About you',
      field_name: 'about_you',
      type: 'textArea',
      description: 'Now tell us something about yourself in a minimum of 100 characters.',
      formControl: ['', [Validators.required, Validators.minLength(100)]]
    },
  ];

  getCVList(): CvList[] {
    return this._cvList.map(({id, label, field_name, type, description}) => {
      return {id, label, field_name, type, description};
    });
  }

  getFormCV(): FormGroup {
    return this.fb.group(this._cvList.reduce((ac, cr) => {
      const control = {};
      control[cr.field_name]  = cr.formControl
      Object.assign(ac, control);
      return ac;
    }, {}));
  }

  submitForm(form) {

    const formData = new FormData();

    for (const key of Object.keys(form.value)) {
      const value = form.value[key];
      formData.append(key, value);
    }

    this.apiCall.call(formData)

  }
}
