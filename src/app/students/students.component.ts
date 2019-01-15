import { Component, OnInit } from '@angular/core';
import { Students,Student,Students1 } from '../student';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  submitted = false;
  student = {};
  
  student1: Student;
  students1 = Students1;
  


  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  onSubmit(studentform): void { 
    
    this.students1.push(studentform.value);
    this.router.navigate(['../display-students']);

  }
}
