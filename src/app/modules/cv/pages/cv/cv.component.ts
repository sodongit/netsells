import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  currentBoxOnShow = null;

  list = [
    {id: 1, label: 'First name', field_name: 'first_name', type: 'input'},
    {id: 2, label: 'Last name', field_name: 'last_name', type: 'input'},
    {id: 3, label: 'Email', field_name: 'email', type: 'input'},
    {id: 4, label: 'Phone number', field_name: 'phone_number', type: 'input'},
    {id: 5, label: 'Do you live in the uk?', field_name: 'live_in_uk', type: 'checkbox'},
    {id: 6, label: 'Git profile', field_name: 'git_profile', type: 'input'},
    {id: 7, label: 'Upload CV', field_name: 'cv', type: 'file'},
    {id: 8, label: 'Upload Cover Letter', field_name: 'cover_letter', type: 'file'},
    {id: 9, label: 'About you', field_name: 'about_you', type: 'textfield'},
  ]

  formCV = this.fb.group({
    first_name: [''],
    last_name: [''],
    email: [''],
    phone_number: [''],
    live_in_uk: [false],
    git_profile: [''],
    cv: [null],
    cover_letter: [null],
    about_you: [],
  })

  constructor(private fb: FormBuilder) {
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
