import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
  HttpParams
} from "@angular/common/http";
import { Observable, observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  baseURL = "http://localhost:8080/PortfolioManager/api";
  constructor(private http: HttpClient) { }

  public signinFunction(userData: any): Observable<any> {
    return this.http.get(`${this.baseURL}/getUserByName/${userData.emailId}/${userData.userPassword}`);
  }

  public signupFunction(userName:any , emailId: any, phoneNumber:any, userPassword:any): Observable<any> {
    const params = new URLSearchParams()
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    params.set("user_name", userName)
    params.set("email_id", emailId)
    params.set("contact", phoneNumber)
    params.set("password", userPassword);
    return this.http.post(`${this.baseURL}/addUser`, params, options);
  }

}
