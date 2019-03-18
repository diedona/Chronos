import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from '../shared/services/messages.service';
import { LoginService } from '../shared/services/login.service';
import { LoaderService } from '../shared/services/loader.service';

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
    private loginService: LoginService,
    private loadingService: LoaderService
  ) { }

  ngOnInit() {
    this.registrarForm = this.criarForm();
  }

  onSubmit(): void {
    if (this.registrarForm.invalid) {
      this.messageService.error("Cheque o formulário!");
      return;
    }

    this.loadingService.show();

    const { email, password } = this.registrarForm.value;
    this.loginService.createLogin(email, password).subscribe(appStatus => {

      this.loadingService.hide();
      if (appStatus.status === true) {
        this.router.navigate(['/app/home']);
      } else {
        this.messageService.error(appStatus.message);
      }

    }, (err) => {
      this.loadingService.hide();
      this.messageService.error("Ocorreu um erro desconhecido!");
    })
  }

  onVoltar(): void {
    this.router.navigate(['/login']);
  }

  private criarForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
