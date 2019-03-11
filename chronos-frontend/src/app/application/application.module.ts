import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { HomeComponent } from './home/home.component';
import { BaseModule } from '../shared/base/base.module';
import { ProjetosComponent } from './projetos/projetos.component';
import { ApontamentosComponent } from './apontamentos/apontamentos.component';

@NgModule({
  declarations: [HomeComponent, ProjetosComponent, ApontamentosComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    BaseModule
  ]
})
export class ApplicationModule { }
