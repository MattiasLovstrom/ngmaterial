import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutocompleateModule } from './automcompleate.module';
import { DndModule } from './dnd.module';
import { FormModule } from './form.module';
import { MyDynamicFormModule } from './dynamic-form/mydynamic-form.module';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';
import { MyDynamicFormComponent } from './dynamic-form/mydynamic-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AutocompleateModule,
    DndModule,
    FormModule,
    ReactiveFormsModule
  ],
  exports: [
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
