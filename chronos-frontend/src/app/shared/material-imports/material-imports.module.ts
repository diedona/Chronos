import { NgModule } from '@angular/core';
import { 
  MatButtonModule, MatCheckboxModule, MatCardModule, 
  MatDialogModule, MatInputModule, MatTableModule, 
  MatToolbarModule, MatMenuModule, MatIconModule, 
  MatProgressSpinnerModule 
} from '@angular/material';

const modules = [
    MatButtonModule, MatCheckboxModule, MatCardModule, 
    MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule,MatIconModule, 
    MatProgressSpinnerModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialImportsModule { }
