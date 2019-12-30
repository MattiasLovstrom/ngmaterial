import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutocompleateModule } from './automcompleate.module';
import { DndModule } from './dnd.module';
import { FormModule } from './form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AutocompleateModule,
    DndModule,
    FormModule
  ],
  exports: [
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
