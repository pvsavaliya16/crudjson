import { Component, OnInit } from '@angular/core';
import { Students, Student, Students1 } from '../student';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  students = Students1;
  thisStudent: Student;
  editStudent: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  deleteStudent(student): void {
    const index = this.students.indexOf(student);
    if( window.confirm("Are you sure?")){
      this.students.splice(index, 1);
    }
  }
  updateStudent(student:Student) :void {
    this.editStudent = true;
    this.thisStudent = student;
  }
  updStudent(updateForm): void {
    this.thisStudent = null;
    this.editStudent = false;//
  }
}