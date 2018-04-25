import {Component, OnChanges, OnInit} from '@angular/core';
import {ChatService} from '../../shared/service/chat.service';

@Component({
  selector: 'comp-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnChanges {
  courses: any;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.getCourses().valueChanges().subscribe(courses => this.courses = courses);
  }

  ngOnChanges() {
    this.chatService.getCourses().valueChanges().subscribe(courses => this.courses = courses);
  }

}
