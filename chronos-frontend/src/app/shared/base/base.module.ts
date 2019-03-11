import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule, WavesModule, CardsFreeModule, CheckboxModule, InputsModule, IconsModule, InputUtilitiesModule, NavbarModule } from 'angular-bootstrap-md'

const modules = [
  ReactiveFormsModule,
  // MDB
  ButtonsModule, WavesModule, CardsFreeModule,
  CheckboxModule, InputsModule, IconsModule,
  InputUtilitiesModule, NavbarModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class BaseModule { }
