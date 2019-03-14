import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    protected http: HttpClient,
    private afAuth: AngularFireAuth
  ) { }

  doLogin(email: string, password: string): Observable<boolean> {
    const subscription = from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
    return new Observable<boolean>((res) => {
      subscription.subscribe(user => {
        //console.log("DEU CERTO", user);
        res.next(true);
        res.complete();
      }, err => {
        //console.log("DEU MERDA", err);
        res.next(false);
        res.complete();
      })
    });
  }

}
