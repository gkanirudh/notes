import { Component, OnInit, Input } from '@angular/core';
import Notes from '../notes.date';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    notes = Notes;
    // tslint:disable-next-line: ban-types
    create: Boolean = false;

    constructor() { }

    ngOnInit() {
    }
}
