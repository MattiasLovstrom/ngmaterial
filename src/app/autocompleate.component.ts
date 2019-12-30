import { Component, OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'autocompleate',
    template: `
    <h1>auto compleate</h1>
    <form class="example-form">
        <mat-form-field class="example-full-width">
            <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto">
            <mat-autocomplete autoActiveFirstOption  #auto="matAutocomplete">
                <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
                    {{option}}
                </mat-option>
            </mat-autocomplete>
        </mat-form-field>
<br>
        <mat-form-field class="example-full-width">
            <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl1" [matAutocomplete]="auto1">
            <mat-autocomplete autoActiveFirstOption  #auto1="matAutocomplete">
                <mat-option *ngFor="let option_ of filteredOptions1 | async" [value]="option_">
                    {{option_}}
                </mat-option>
            </mat-autocomplete>
        </mat-form-field>

    </form>
    `,

})
export class AutocompleateComponent implements OnInit {
    myControl = new FormControl();
    myControl1 = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;
    filteredOptions1: Observable<string[]>;

    ngOnInit(): void {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );

        this.filteredOptions1 = this.myControl1.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
}