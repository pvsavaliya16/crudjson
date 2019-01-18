import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';
import { Student } from './student';

@Directive({
  selector: '[appDisplayStudent]',
  
})


export class DisplaystudentDirective implements OnInit {

  @Input('student') student: any;

  constructor(private el: ElementRef,
              private renderer: Renderer) {
  
  }

  ngOnInit(){
    console.log(this.student);
   this.renderer.setElementProperty(this.el.nativeElement, 'innerHTML', `<td>{{this.student.firstName + " " + this.student.lastName}}</td>
    <td>{{this.student.eid}}</td>
    <td>{{this.student.sem}}</td>
    <td>{{this.student.branch}}</td>
    <td>
      <button class="btn-dark btn" (click)="deleteStudent(student)">Delete</button>
    &nbsp; &nbsp;
      <button class="btn btn-dark" (click)="updateStudent(student)">Edit</button>
    </td>`);
  }

}
