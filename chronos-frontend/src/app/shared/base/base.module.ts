import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomComponentsModule } from './../components/custom-components.module';
import { MdbootstrapImportsModule } from './mdbootstrap-imports/mdbootstrap-imports.module';

const modules = [
  ReactiveFormsModule,
  CustomComponentsModule,
  MdbootstrapImportsModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class BaseModule { }
