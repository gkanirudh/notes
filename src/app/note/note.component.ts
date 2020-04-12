import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {
    @Input() note;
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onDelete = new EventEmitter();

    deleteNote(e) {
        e.preventDefault();
        this.onDelete.emit(this.note.id);
    }

    constructor() { }
    ngOnInit() { }
}
