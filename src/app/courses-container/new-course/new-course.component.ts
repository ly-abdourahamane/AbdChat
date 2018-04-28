import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../shared/service/chat.service';

@Component({
  selector: 'comp-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  name: string;
  path: string;
  description: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.name = '';
    this.path = '';
    this.description = '';
  }

  createCourse(): void {
    this.chatService.createCourse(this.name, this.path, this.description);
    this.name = this.description = this.path = '';
  }

}
