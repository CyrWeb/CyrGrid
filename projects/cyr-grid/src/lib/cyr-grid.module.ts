import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { CyrGridComponent } from './cyr-grid.component';



@NgModule({
  declarations: [
    CyrGridComponent
  ],
  imports: [
    AgGridModule
  ],
  exports: [
    CyrGridComponent
  ]
})
export class CyrGridModule { }
