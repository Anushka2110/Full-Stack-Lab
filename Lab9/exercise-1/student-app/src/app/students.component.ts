
import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'students',
    template: '<h2>{{ getTitle() }} - {{ getCurrentDate()}}</h2>'
 })
export class StudentsComponent {
    title  = "My List of Students";

    getTitle(): string {
        return this.title;
    }

    getCurrentDate(): string{
        let today = moment().format('D MMM YYYY');
        return today;
    }
}

