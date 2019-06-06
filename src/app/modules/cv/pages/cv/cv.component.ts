import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  list = [
    {label: 'First name', field_name: 'first_name'},
    {label: 'Last name', field_name: 'last_name'},
    {label: 'Email', field_name: 'email'},
    {label: 'Phone number', field_name: 'phone_number'},
    {label: 'Do you live in the uk?', field_name: 'live_in_uk'},
    {label: 'Git profile', field_name: 'git_profile'},
    {label: 'Upload CV', field_name: 'cv'},
    {label: 'Upload Cover Letter', field_name: 'cover_letter'},
    {label: 'About you', field_name: 'about_you'},
  ]


  constructor() { }

  ngOnInit() {
  }

}
