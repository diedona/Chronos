import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { MessagesService } from '../../services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private messageService: MessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.doLogout().subscribe(ok => {
      if (ok === true) {
        this.router.navigate(['/login']);
      } else {
        this.messageService.error("Erro ao desconectar!");
      }
    })
  }

  name(): string {
    return this.loginService.displayName || this.loginService.displayEmail;
  }

}
