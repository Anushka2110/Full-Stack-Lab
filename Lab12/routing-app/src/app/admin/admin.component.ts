import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './admin.component.html'
})
export class AdminComponent  {

 log(x) { 
   console.log('log called')
   console.log(x) 
  }

 
 onSubmit(f: NgForm) {
   
  console.log('onSubmit called...')
  console.log(`firstName: ${f.value.first}`);  // { first: '', last: '' }
  console.log(f.valid);  // false
  console.log(f);
  // create/update/delete method to save form values
  // route redirect to main page here...
 }
}
