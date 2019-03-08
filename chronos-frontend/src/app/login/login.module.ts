import { BaseModule } from './../shared/base/base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { MaterialImportsModule } from '../shared/material-imports/material-imports.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    BaseModule
  ]
})
export class LoginModule { }
