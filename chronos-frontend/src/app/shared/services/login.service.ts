import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    protected http: HttpClient,
    private afAuth: AngularFireAuth
  ) { }

  doLogin(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }
  
}
