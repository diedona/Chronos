import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Injectable({ providedIn: 'root' })
export class AppLoginGuardService implements CanActivate {
    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.loginService.isLoggedIn && this.loginService.isEmailConfirmed) {
            this.router.navigate(["/app/home"]);
            return false;
        } else {
            return true;
        }
    }
}