import { Injectable } from '@angular/core';
import { Students1 } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {}

  getStudents() {
    return Students1;
  }
}
