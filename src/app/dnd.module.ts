import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { DndComponent } from './dnd.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [
        DndComponent
    ],
    imports: [
        BrowserModule,
        DragDropModule
    ],
    exports: [
        DndComponent
    ]
})
export class DndModule {}
