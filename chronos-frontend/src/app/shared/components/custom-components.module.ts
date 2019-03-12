import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHintComponent } from './error-hint/error-hint.component';
import { FormGroupComponent } from './form-group/form-group.component';

@NgModule({
  declarations: [
    ErrorHintComponent, FormGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorHintComponent, FormGroupComponent
  ]
})
export class CustomComponentsModule { }
