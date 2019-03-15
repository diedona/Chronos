import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from '../shared/services/messages.service';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  registrarForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessagesService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.registrarForm = this.criarForm();
  }

  onSubmit(): void {
    if (this.registrarForm.invalid) {
      this.messageService.error("Cheque o formulário!");
      return;
    }

    const { email, password } = this.registrarForm.value;
    this.loginService.createLogin(email, password).subscribe(status => {

      if (status === true) {
        this.router.navigate(['/app/home']);
      } else {
        this.messageService.error("Ocorreu um erro ao se registrar!");
      }

    }, (err) => {
      this.messageService.error("Ocorreu um erro desconhecido!");
    })
  }

  onVoltar(): void {
    this.router.navigate(['/login']);
  }

  private criarForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

}
