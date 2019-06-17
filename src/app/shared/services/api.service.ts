import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

export interface ApiError {
  error: boolean;
  errors: string[];
}

@Injectable({
  providedIn: 'root'
})

export class ApiService{

  private _apiError: BehaviorSubject<ApiError> = new BehaviorSubject({error: false, errors:[]});
  private _apiCalled: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private router: Router) { }

  apiError() {
    return this._apiError;
  }

  apiCalled() {
    this._apiCalled.next(true);
  }

  apiReturned() {
    this._apiCalled.next(false);
  }

  nextAction() {
    this.router.navigate(['thanks']);
  }

  setApiError(error) {
    const messages = Object.keys(error.errors).map((key) => {
      const [message] = error.errors[key];
      return message;
    });
    this._apiError.next({error: true, errors: messages});
  }
}
