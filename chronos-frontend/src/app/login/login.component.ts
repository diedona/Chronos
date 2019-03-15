import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { MessagesService } from '../shared/services/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private messageService: MessagesService,
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (!this.userForm.valid) {
      this.messageService.error("Cheque o formulário!");
      return;
    }

    const { email, password } = this.userForm.value;
    this.loginService.doLogin(email, password).subscribe(data => {
      if (data.status === true) {
        this.router.navigate(['/app/home']);
      } else {
        this.messageService.error(data.message);
      }
    }, err => {
      this.messageService.error("Erro desconhecido!");
    });
  }

  onRegistrar(): void {
    this.router.navigate(['/registrar']);
  }

}
