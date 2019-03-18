import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-email',
  templateUrl: './confirmar-email.component.html',
  styleUrls: ['./confirmar-email.component.scss']
})
export class ConfirmarEmailComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    //console.log(loginService.isLoggedIn);
  }

  ngOnInit() {
    //this.loginService.sendVerificationEmail();
  }

  onVoltar() {
    this.loginService.sendVerificationEmail().subscribe(() => {
      this.loginService.doLogout().subscribe(x => {
        this.router.navigate(['/login']);
      });
    });
  }

  get nome(): string {
    return this.loginService.displayName || this.loginService.displayEmail;
  }

  get email(): string {
    return this.loginService.displayEmail;
  }

}
