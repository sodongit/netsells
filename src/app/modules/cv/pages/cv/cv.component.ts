import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  currentBoxOnShow = null;

  list = [
    {id: 1,label: 'First name', field_name: 'first_name'},
    {id: 2,label: 'Last name', field_name: 'last_name'},
    {id: 3,label: 'Email', field_name: 'email'},
    {id: 4,label: 'Phone number', field_name: 'phone_number'},
    {id: 5,label: 'Do you live in the uk?', field_name: 'live_in_uk'},
    {id: 6,label: 'Git profile', field_name: 'git_profile'},
    {id: 7,label: 'Upload CV', field_name: 'cv'},
    {id: 8,label: 'Upload Cover Letter', field_name: 'cover_letter'},
    {id: 9,label: 'About you', field_name: 'about_you'},
  ]



  constructor() { }

  ngOnInit() {
  }

  showBox(id) {
    this.currentBoxOnShow = id;
  }


}
