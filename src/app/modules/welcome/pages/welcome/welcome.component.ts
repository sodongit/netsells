import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CvService} from "../../../../core/services/cv.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router,
              private cvService: CvService) {
    this.cvService.pageBackground.next('welcome');
  }

  ngOnInit() {
  }

  startForm() {
    this.router.navigate(['/cv']);
  }

}
