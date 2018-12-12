import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
 
  templateUrl: './student-detail.component.html'
})
export class StudentDetailComponent implements OnInit {

  public pageTitle: String;
  public student: any;
  
  constructor(private route: ActivatedRoute, private router: Router) { 

    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle = `Student No: ${id}`;
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap);
    // get the id parameter from the router url

    // set a static student value, this should come from a service
    this.student =  { FirstName: 'Gordie', LastName: 'Howe', StudentNo: 9};
  }

  onBack(): void {
    this.router.navigateByUrl('/students');
  }
  
}
