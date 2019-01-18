import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StudentService } from './student.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { DisplayComponent } from './display/display.component';
import { DisplaystudentDirective } from './displaystudent.directive';
import { DispComponent } from './disp/disp.component';



const appRoutes: Routes = [
  { path: 'display-students', component: DisplayComponent },
  { path: 'add-students', component: StudentsComponent },
  
]

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DisplayComponent,
    DisplaystudentDirective,
    DispComponent,
    
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
