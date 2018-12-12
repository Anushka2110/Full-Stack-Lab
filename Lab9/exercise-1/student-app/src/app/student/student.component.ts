import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('In OnInit');
  }

  ngAfterViewInit() {
    console.log('In AfterViewInit');
  }

  ngOnDestroy() {
    
  }
}
