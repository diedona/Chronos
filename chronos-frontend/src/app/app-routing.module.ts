import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },
  { path: 'login', component: LoginComponent },
  {
    path: 'app', component: AppLayoutComponent,
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
