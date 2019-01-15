import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Student } from './student';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { StudentsComponent } from './students/students.component';
import { DisplayComponent } from './display/display.component';



const appRoutes: Routes = [
  { path: 'display-students', component: DisplayComponent },
  { path: 'add-students', component: StudentsComponent },
  
]

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DisplayComponent,
    
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
