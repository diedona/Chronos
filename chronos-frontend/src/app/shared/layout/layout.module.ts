import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { RouterModule } from '@angular/router';
import { BaseModule } from '../base/base.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [AppLayoutComponent, AppHeaderComponent, AppFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    BaseModule
  ]
})
export class LayoutModule { }
