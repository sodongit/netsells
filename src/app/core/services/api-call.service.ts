import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) {

  }


  call(data) {
    console.log("data", data);
    this.http.post('https://recruitment-submissions.netsells.co.uk/api/vacancies/javascript-developer/submissions', data, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(res => {
        console.log("res", res);
      },
      error => {
        console.log("error", error);
      });
  }


}
