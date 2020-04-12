import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import Notes from '../notes.date';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})

export class NotesComponent implements OnInit {
    notes = Notes;
    // tslint:disable-next-line: ban-types
    create: Boolean = false;
    // tslint:disable-next-line: ban-types
    isShow: Boolean;
    topPosToStartShowing = 100;
    searchText;

    @HostListener('window:scroll')
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        console.log('[scroll]', scrollPosition);

        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
        } else {
            this.isShow = false;
        }
    }

    // TODO: Cross browsing
    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    toggle(e) {
        console.log('inside toggle');
        e.preventDefault();
        this.create = !this.create;
    }

    createNote(e) {
        // tslint:disable-next-line: one-variable-per-declaration
        const time: number = new Date().getTime(),
        { title, content } = e;
        this.notes.unshift({
            id: time,
            time,
            title,
            content
        });
    }

    deleteNote(e) {
        const f = this.notes.filter(el => el.id !== e);
        this.notes = f;
    }

    constructor() { }
    ngOnInit() { }
}
