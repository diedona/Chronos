import { Injectable } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppVerifyEmailGuardService implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.loginService.isEmailConfirmed === false) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

}
