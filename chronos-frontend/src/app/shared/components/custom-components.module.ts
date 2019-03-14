import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHintComponent } from './error-hint/error-hint.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    ErrorHintComponent, FormGroupComponent, LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorHintComponent, FormGroupComponent, LoaderComponent
  ]
})
export class CustomComponentsModule { }
