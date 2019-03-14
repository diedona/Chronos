import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(
    protected http: HttpClient
  ) { 
    super(http);
  }

  doLogin(username: string, password: string): Observable<any> {
    return this.post("auth", {username: username, password: password});
  }
  
}
