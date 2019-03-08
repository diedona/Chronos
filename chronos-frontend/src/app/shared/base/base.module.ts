import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { ReactiveFormsModule } from '@angular/forms';

const modules = [
  MaterialImportsModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class BaseModule { }
