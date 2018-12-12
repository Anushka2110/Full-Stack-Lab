import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student/student-detail.component';
import { StudentListComponent } from './student/student-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './admin/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentListComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'students', component: StudentListComponent },
      { path: 'students/:id', component: StudentDetailComponent },
      { path: 'admin', canActivate: [AdminGuard], component: AdminComponent },

      { path: '', redirectTo: 'students', pathMatch: 'full' },
      { path: '**', redirectTo: 'students', pathMatch: 'full' }
    ], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
