import { Component, OnInit } from '@angular/core';
import { Students,Student,Students1 } from '../student';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  submitted = false;
  student = {};
  
  student1: Student;
  students1;
  


  constructor(private router:Router, private _studentService: StudentService) { }

  ngOnInit() {
    this.students1 = this._studentService.getStudents();
  }
  onSubmit(studentform): void { 
    
    this.students1.push(studentform.value);
    this.router.navigate(['../display-students']);

  }
}
