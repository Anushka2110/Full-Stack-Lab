import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students.component';
import { StudentComponent } from './student/student.component';
import { CoursesComponent } from './CourseComponent';
import { HereosComponent } from './hereos/hereos.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent, 
    CoursesComponent, HereosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
