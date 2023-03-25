import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CyrGridModule } from 'cyr-grid';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CyrGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
