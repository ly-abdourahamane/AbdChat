import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'comp-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.css']
})
export class CoursesContainerComponent implements OnInit {

  courses: any;

  constructor() {
  }

  ngOnInit() {
  }

}
