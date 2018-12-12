import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit {

  students: any[]; 
  constructor() { 
    console.log('student-list called');
  }

  ngOnInit() {
  
    console.log('OnInit');
    this.students = [
      { FirstName: 'Stevie', LastName: 'Yzerman', StudentNo: 19},
      { FirstName: 'Bob', LastName: 'Probert', StudentNo: 24},
      { FirstName: 'Dino', LastName: 'Ciccarelli', StudentNo: 22},
    ]
  }

}
