import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
    selector: 'dynamicform',
    template: `
        <h1>Form</h1>
        <form (ngSubmit)="onSubmit()" [formGroup]="form"  >
            <ul>
                <li formArrayName="items" *ngFor="let item of form.get('items').controls; let i = index;">
                    <ng-container [formGroupName]="i">
                        <input formControlName="text" placeholder="Item name">
                    </ng-container>
                </li>
            </ul>
        </form>
    `
})
export class MyDynamicFormComponent implements OnInit{
    form: FormGroup;
    filteredOptions: Observable<string[]>;
    options: string[] = ['One', 'Two', 'Three'];

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        var first = this.createItem();
        this.form = this.fb.group({
            items: this.fb.array([first, this.createItem(), this.createItem()])
        });
    }

    createItem(): FormGroup {
        return this.fb.group({
            text: ''
        });
    }

    onSubmit() {
        console.log("Submitted");
    }
}