import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://challenge-react.alkemy.org/";

  constructor(private http: HttpClient) { }

  post(form: any){
    return this.http.post(this.url, form);
  }
}
