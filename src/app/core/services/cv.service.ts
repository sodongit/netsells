import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileType} from "../validators/file-validator";
import {ApiCallService} from "./api-call.service";
import {GitUrl} from "../validators/gitUrl";

export interface CvList {
  id: number,
  label: string,
  field_name: string,
  type: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private fb: FormBuilder,
              private apiCall: ApiCallService) {
  }

  // TODO refactor validators to be dynamic
  // TODO refactor to make custom validators dynamic
  // TODO create api call for cvList to remove from frontend code.

  private _cvList = {
    step1: {
      step: 1,
      title: 'Personal Details',
      description: 'Please complete your personal details section by clicking complete',
      form: {
        first_name: {
          id: 0,
          label: 'First name',
          type: 'text',
          description: 'Please enter your first name.',
          formControl: ['', [Validators.required, Validators.minLength(2)]],
          errorMessage: {
            required: 'A First name is required',
            minlength: 'Your first name needs at least 2 characters',
          }
        },
        last_name: {
          id: 1,
          label: 'Second name',
          type: 'text',
          description: 'Please enter your last name.',
          formControl: ['']
        },
        email: {
          id: 2,
          label: 'Email Address',
          type: 'email',
          description: 'Please enter a valid email address.',
          formControl: ['', [Validators.required, Validators.email]],
          errorMessage: {
            required: 'An email address is required',
            email: 'The email address seems to be incorrectly formatted',
          }
        },
        phone_number: {
          id: 3,
          label: 'Phone Number',
          type: 'number',
          description: 'Please enter the phone number we can contact you on.',
          formControl: ['']
        },
      }
    },
    step2: {
      step: 2,
      title: 'More About You',
      description: 'Please complete this section by clicking complete',
      form: {
        live_in_uk: {
          id: 4,
          label: 'Do you live in the UK?',
          type: 'radio',
          description: 'Are you a current resident of the uk?',
          formControl: ['', Validators.required],
          errorMessage: {
            required: 'An answer to "Do you live in the uk" is required',
            gitUrl: 'The Git profile url seems to be incorrectly formatted',
          }
        },
        git_profile: {
          id: 5,
          label: 'Your Git Profile',
          type: 'text',
          description: 'Please enter your git profile url',
          formControl: ['', [Validators.required, GitUrl()]],
          errorMessage: {
            required: 'The Git profile url is required',
            gitUrl: 'The Git profile url seems to be incorrectly formatted',
          }
        },
        about_you: {
          id: 8,
          label: 'About you',
          type: 'textArea',
          description: 'Now tell us something about yourself in a minimum of 100 characters.',
          formControl: ['', [Validators.required, Validators.minLength(100)]],
          errorMessage: {
            required: 'The About You description is required',
            minlength: 'The About You needs at least 100 charictores'
          }
        }
      }
    },
    step3: {
      step: 3,
      title: 'Files Upload',
      description: 'Just upload your cover letter to complete this section',
      form: {
        cv: {
          id: 6,
          label: 'Upload Your CV',
          type: 'file',
          description: 'Drag and drop or Upload you CV file here',
          formControl: [null, [Validators.required, FileType(['txt', 'docx', 'pdf'])]],
          errorMessage: {
            required: 'The CV file is required',
            fileType: 'The Cover Letter file type needs to be .txt, .docx or .pdf',
          }
        },
        cover_letter: {
          id: 7,
          label: 'Upload Your Cover Letter',
          type: 'file',
          description: 'Drag and drop or Upload you Cover Letter file here',
          formControl: [null, [FileType(['txt', 'docx', 'pdf'])]],
          errorMessage: {
            fileType: 'The Cover Letter file type needs to be .txt, .docx or .pdf',
          }
        },
      }
    },
  };

  //TODO refactor Object.keys(this._cvList)

  getCardList() {
    return Object.keys(this._cvList).map((key) => {
      const {step, title, description, form} = this._cvList[key];
      const outof = Object.keys(form).length;
      return {step, title, description, outof};
    });
  }


  getCVList(): CvList[] {
    return Object.keys(this._cvList).map((key) => {
      const {id, label, type, description} = this._cvList[key]
      const field_name = key;
      return {id, label, field_name, type, description};
    });
  }

  //TODO refactor Object.keys(this._cvList)

  getFormCV(): FormGroup {
    const formObject = Object.keys(this._cvList)
      .map((key) => this._cvList[key].form)
      .reduce((ac,cr) => Object.assign(ac,cr), {});

     return this.fb.group(Object.keys(formObject)
      .reduce((ac, cr) => {
      const control = {};
      control[cr] = formObject[cr].formControl;
      Object.assign(ac, control);
      return ac;
    }, {}));
  }

  getControlErrorMessage(control, error) {
    return this._cvList[control].errorMessage[error];
  }


  submitForm(form) {

    const formData = new FormData();

    for (const key of Object.keys(form.value)) {
      const value = form.value[key];
      if (value !== null) {
        formData.append(key, value);
      }
    }

    this.apiCall.call(formData)

  }
}
