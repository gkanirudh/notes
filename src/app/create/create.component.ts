import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-create-note',
    templateUrl: './create.component.html',
    styleUrls:['./create.component.scss']
})

export class CreateComponent implements OnInit {
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onBack = new EventEmitter();
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onCreateNote = new EventEmitter();
    // tslint:disable-next-line: ban-types
    note = {
        title: '',
        content: ''
    };

    toggleBack(e) {
        this.onBack.emit(e);
    }

    createNote(e) {
        e.preventDefault();
        // add an interface later
        const obj: any = {
            title: this.note.title,
            content: this.note.content
        };
        // const obj: any = this.note;
        console.log('this.note', this.note);
        console.log('this.obj', obj);
        this.onCreateNote.emit(obj);
        this.toggleBack(e);
    }
    constructor() { }

    ngOnInit() { }
}
