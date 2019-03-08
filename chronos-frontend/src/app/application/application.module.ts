import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { HomeComponent } from './home/home.component';
import { BaseModule } from '../shared/base/base.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    BaseModule
  ]
})
export class ApplicationModule { }
