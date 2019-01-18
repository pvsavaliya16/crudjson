import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.scss']
})
export class DispComponent implements OnInit {

  @Input('student') student: any;
  constructor() { }

  ngOnInit() {
  }

}
