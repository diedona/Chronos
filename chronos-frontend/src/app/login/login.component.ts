import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (!this.userForm.valid) {
      // TO-DO: ALERT
      return;
    }

    const { username, password } = this.userForm.value;
    this.loginService.doLogin(username, password).subscribe(data => {
      console.log("OK");
      // TO-DO: SERVER SIDE
      this.router.navigate(['/app/home']);
    }, err => {
      alert("SHIT HAPPENS");
      console.log(err);
    })
  }

}
