import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbootstrapImportsModule } from './mdbootstrap-imports/mdbootstrap-imports.module';

const modules = [
  ReactiveFormsModule,
  MdbootstrapImportsModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class BaseModule { }
