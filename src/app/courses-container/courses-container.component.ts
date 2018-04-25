import {Component, OnChanges, OnInit} from '@angular/core';
import {ChatService} from '../shared/service/chat.service';

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
