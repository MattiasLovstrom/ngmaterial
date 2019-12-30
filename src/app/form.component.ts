import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
    selector: 'myform',
    template: `
        <h1>Form</h1>
        <form (ngSubmit)="onSubmit()" [formGroup]="form"  >
            <ul cdkDropList (cdkDropListDropped)="drop($event)">
                <li formArrayName="items" *ngFor="let item of form.get('items').controls; let i = index;"  cdkDrag (cdkDragStarted)="dragStarted()">
                    <ng-container [formGroupName]="i">
                        <input matInput formControlName="text" placeholder="Item name" [matAutocomplete]="auto">
                        <mat-autocomplete autoActiveFirstOption  #auto="matAutocomplete">
                            <mat-option *ngFor="let option_ of filteredOptions | async" [value]="option_">
                                {{option_}}
                            </mat-option>
                        </mat-autocomplete>
                    </ng-container>
                </li>
            </ul>
        </form>
    `
})
export class FormComponent implements OnInit{
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
        this.filteredOptions = first.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    createItem(): FormGroup {
        return this.fb.group({
            text: ''
        });
    }

    drop(event: CdkDragDrop<string[]>) {
        var items = this.form.get('items') as FormArray;
        
        moveItemInArray(items.controls, event.previousIndex, event.currentIndex);
        console.log("dnd", items);
    }

    dragStarted() {
        var items = this.form.get('items') as FormArray;
        
        console.log("stated", items);
    }

    onSubmit() {
        console.log("Submitted");
    }
}