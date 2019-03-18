import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-confirmar-email',
  templateUrl: './confirmar-email.component.html',
  styleUrls: ['./confirmar-email.component.scss']
})
export class ConfirmarEmailComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.sendVerificationEmail();
  }

  get nome(): string {
    return this.loginService.displayName || this.loginService.displayEmail;
  }

  get email(): string {
    return this.loginService.displayEmail;
  }

}
