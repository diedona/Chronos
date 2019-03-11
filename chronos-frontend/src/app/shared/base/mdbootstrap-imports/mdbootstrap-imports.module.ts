import { NgModule } from '@angular/core';
import { ButtonsModule, WavesModule, CardsFreeModule, CheckboxModule, InputsModule, IconsModule, InputUtilitiesModule, NavbarModule } from 'angular-bootstrap-md';

const modules = [
  ButtonsModule, WavesModule, CardsFreeModule,
  CheckboxModule, InputsModule, IconsModule,
  InputUtilitiesModule, NavbarModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MdbootstrapImportsModule { }
