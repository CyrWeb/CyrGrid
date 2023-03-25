import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community/dist/lib/main';
import { magicCardFactory } from './magicCardFactory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CyrGrid';
  columnDefs: Array<ColDef> = [];
  rowData = magicCardFactory();
}
