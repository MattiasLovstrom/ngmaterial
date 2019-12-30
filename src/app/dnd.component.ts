import { Component } from "@angular/core";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'dnd',
    template: `
    <h1>Dnd</h1>
    <ul cdkDropList (cdkDropListDropped)="drop($event)">
        <li *ngFor="let movie of movies" cdkDrag>{{movie}}</li>
    </ul>
    `
})
export class DndComponent{
    movies = ["1111111", "2222222", "3333333"];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}