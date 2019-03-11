import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHintComponent } from './error-hint/error-hint.component';

@NgModule({
  declarations: [ErrorHintComponent],
  imports: [
    CommonModule
  ],
  exports: [ErrorHintComponent]
})
export class CustomComponentsModule { }
