import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileType} from "../validators/file-validator";
import {ApiCallService} from "./api-call.service";
import {GitUrl} from "../validators/gitUrl";
import {BehaviorSubject} from "rxjs";

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


  private _pageBackground = new BehaviorSubject('welcome');

  constructor(private fb: FormBuilder,
              private apiCall: ApiCallService) {
  }

  // TODO refactor validators to be dynamic
  // TODO refactor to make custom validators dynamic
  // TODO create api call for cvList to remove from frontend code.

  private _cvList = {
    step1: {
      stepOrder: 1,
      step: 'step1',
      title: 'Personal Details',
      description: 'Please complete your personal details section by clicking complete',
      form: {
        first_name: {
          id: 0,
          label: 'First name',
          type: 'text',
          required: true,
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
          required: false,
          formControl: ['']
        },
        email: {
          id: 2,
          label: 'Email Address',
          type: 'email',
          required: true,
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
          required: false,
          formControl: ['']
        },
      }
    },
    step2: {
      stepOrder: 2,
      step: 'step2',
      title: 'More About You',
      description: 'Please complete this section by clicking complete',
      form: {
        live_in_uk: {
          id: 4,
          label: 'Do you live in the UK?',
          type: 'input',
          required: true,
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
          required: true,
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
          required: true,
          description: 'Let us know more about you. What are you in to?',
          formControl: ['', [Validators.required, Validators.minLength(100)]],
          errorMessage: {
            required: 'The About You description is required',
            minlength: 'The About You needs at least 100 charictores'
          }
        }
      }
    },
    step3: {
      stepOrder: 3,
      step: 'step3',
      title: 'Files Upload',
      description: 'Just upload your cover letter to complete this section',
      form: {
        cv: {
          id: 6,
          label: 'Upload Your CV',
          type: 'file',
          required: true,
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
          required: false,
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
    return {
      keys: Object.keys(this._cvList),
      data: Object.keys(this._cvList).map((key) => {
        const {step, stepOrder, title, description, form} = this._cvList[key];
        const outof = Object.keys(form).length;
        const obj = {};
        obj[key] = {step, stepOrder, title, description, outof};
        return obj;
      })
        .reduce((ac, cr) => Object.assign(ac, cr), {})
    };
  }


  getCVList() {
    return Object.keys(this._cvList).map((key) => {
      const obj = {};
      obj[key] = Object.keys(this._cvList[key].form)
        .map((formKey) => {
          const {id, label, type, required, description} = this._cvList[key].form[formKey];
          const field_name = formKey;
          return {id, label, field_name, type, required, description};
        });
      return obj
    })
      .reduce((ac, cr) => Object.assign(ac, cr), {});
  }

  //TODO refactor Object.keys(this._cvList)

  getFormCV() {
    return Object.keys(this._cvList)
      .map((key) => {
        const stepList = {};
        stepList[key] = this.fb.group(Object.keys(this._cvList[key].form)
          .reduce((ac, cr) => {
            const control = {};
            control[cr] = this._cvList[key].form[cr].formControl;
            Object.assign(ac, control);
            return ac;
          }, {}));
        return stepList;
      })
      .reduce((ac, cr) => Object.assign(ac, cr), {});
  }

  getControlErrorMessage(control, error) {
    return this._cvList[control].errorMessage[error];
  }


  submitForm(form) {

    const formData = new FormData();

    Object.keys(form)
      .map((stepKey) => {
        for (const key of Object.keys(form[stepKey].value)) {
          const value = form[stepKey].value[key];
          if (value !== null) {
            formData.append(key, value);
          }
        }
      });

    this.apiCall.call(formData);

  }

  get pageBackground() {
    return this._pageBackground;
  }

}
