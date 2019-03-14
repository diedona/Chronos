import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  name(): string {
    return this.loginService.displayName;
  }

}
