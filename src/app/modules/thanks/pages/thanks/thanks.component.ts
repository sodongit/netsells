import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CvService} from "../../../../core/services/cv.service";

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  constructor(private router: Router,
              private cvService: CvService
              ) {
    this.cvService.pageBackground.next('thanks');
  }

  ngOnInit() {
  }

  backToStart(){
    this.router.navigate(['welcome']);
  }
}
