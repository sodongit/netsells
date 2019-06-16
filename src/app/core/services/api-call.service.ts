import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';
import {ApiService} from "../../shared/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient,
              private apiService: ApiService) {
  }


  call(data) {
    this.apiService.apiCalled();
    this.http.post('https://recruitment-submissions.netsells.co.uk/api/vacancies/javascript-developer/submissions', data, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(res => {
        console.log("res", res);
        this.apiService.apiReturned();
      },
      error => {
      const {errors} =  error.error;
        this.apiService.apiReturned();
        this.apiService.setApiError({error, errors});
      });

  }


}
