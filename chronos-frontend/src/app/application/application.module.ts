import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialImportsModule } from '../shared/material-imports/material-imports.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    MaterialImportsModule
  ]
})
export class ApplicationModule { }
