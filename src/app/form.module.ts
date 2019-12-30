import { NgModule } from "@angular/core";
import { FormComponent } from './form.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        DragDropModule,
        MatAutocompleteModule,
        MatInputModule
    ], 
    exports: [
        FormComponent
    ]
})
export class FormModule {}