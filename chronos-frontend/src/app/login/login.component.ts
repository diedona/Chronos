import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if(!this.userForm.valid) {
      // TO-DO: ALERT
      return;
    }

    // TO-DO: SERVER SIDE
    this.router.navigate(['/app/home']);
  }

}
