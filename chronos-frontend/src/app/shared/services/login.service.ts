import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUser: firebase.User;

  // ITS SAFE TO USE LOGIN IN SERVICE'S CONSTRUCTOR
  constructor(
    protected http: HttpClient,
    private afAuth: AngularFireAuth
  ) {

    // LAST DATA USED
    const userLocalStorage = localStorage.getItem("user");
    if (userLocalStorage) {
      this.currentUser = JSON.parse(userLocalStorage);
    }

    // REFRESH DATA FOR SECURITY
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(this.currentUser));
      } else {
        this.clearLoginData();
      }
    });
  }

  doLogin(email: string, password: string): Observable<boolean> {
    const signinObservable = from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
    return new Observable<boolean>((res) => {
      signinObservable.subscribe(user => {
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

  doLogout(): Observable<boolean> {
    const signOutObservable = from(this.afAuth.auth.signOut());
    return new Observable<boolean>((obs) => {
      signOutObservable.subscribe(() => {
        this.clearLoginData();
        obs.next(true);
        obs.complete();
      }, err => {
        obs.next(false);
        obs.complete();
      });
    })
  }

  private clearLoginData() {
    this.currentUser = null;
    localStorage.setItem('user', null);
  }

  get isLoggedIn(): boolean {
    return (this.currentUser !== null);
  }

  get displayName(): string {
    if (this.isLoggedIn) {
      return this.currentUser.email;
    } else {
      return '';
    }
  }

}
