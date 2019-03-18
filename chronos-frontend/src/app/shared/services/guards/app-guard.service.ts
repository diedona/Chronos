import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';


@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivate {
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if(this.loginService.isLoggedIn) {
      
      if(this.loginService.isEmailConfirmed){
        return true;
      } else {
        this.router.navigate(["/confirmar-email"]);
        return false;
      }

    }

    this.router.navigate(["/login"]);
    return false;

  }
}
