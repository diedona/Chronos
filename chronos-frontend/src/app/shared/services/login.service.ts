import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    protected http: HttpClient
  ) { }

  doLogin(username: string, password: string): Observable<any> {
    return this.http.post("auth", {username: username, password: password});
  }
  
}
