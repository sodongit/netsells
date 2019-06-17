import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToStart(){
    this.router.navigate(['welcome']);
  }
}
