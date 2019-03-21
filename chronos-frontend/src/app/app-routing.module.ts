import { AppLoginGuardService } from './shared/services/guards/app-login-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { AppGuardService } from './shared/services/guards/app-guard.service';
import { RegistrarComponent } from './registrar/registrar.component';
import { ConfirmarEmailComponent } from './confirmar-email/confirmar-email.component';
import { AppVerifyEmailGuardService } from './shared/services/guards/app-verify-email-guard.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, data: { title: 'Login' }, canActivate: [AppLoginGuardService] },
  { path: 'registrar', component: RegistrarComponent, data: { title: 'Registrar' } },
  {
    path: 'confirmar-email',
    component: ConfirmarEmailComponent,
    data: { title: 'Confirmar E-mail' },
    canActivate: [AppVerifyEmailGuardService],
  },
  {
    path: 'app',
    component: AppLayoutComponent,
    data: { title: 'Chronos TT | ' },
    canActivate: [AppGuardService],
    children: [
      { path: '', loadChildren: './application/application.module#ApplicationModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
