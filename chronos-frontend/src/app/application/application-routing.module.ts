import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ApontamentosComponent } from './apontamentos/apontamentos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: { subtitle: 'Home'} },
  { path: 'projetos', component: ProjetosComponent, data: { subtitle: 'Projetos'} },
  { path: 'apontamentos', component: ApontamentosComponent, data: { subtitle: 'Apontamentos'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
