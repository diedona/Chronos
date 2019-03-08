import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule, WavesModule, CardsFreeModule, CheckboxModule, InputsModule, IconsModule, InputUtilitiesModule } from 'angular-bootstrap-md'

const modules = [
  ReactiveFormsModule,
  // MDB
  ButtonsModule, WavesModule, CardsFreeModule,
  CheckboxModule, InputsModule, IconsModule,
  InputUtilitiesModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class BaseModule { }
