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

    if (!this.loginService.isLoggedIn) {
      // NÃO ESTÁ LOGADO
      this.router.navigate(['/login']);
      return false;
    } else if (this.loginService.isEmailConfirmed === true) {
      // ESTÁ LOGADO E O EMAIL JÁ FOI CONFIRMADO
      this.router.navigate(['/app/home']);
      return false;
    } else {
      return true;
    }

  }

}
