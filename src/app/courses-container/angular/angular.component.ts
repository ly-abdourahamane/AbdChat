import {Component, OnChanges, OnInit} from '@angular/core';
import {ChatService} from '../../shared/service/chat.service';
import {NgForm} from '@angular/forms';
import {isNullOrUndefined} from 'util';
import {Subject} from '../../shared/models/courses';

@Component({
  selector: 'comp-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit, OnChanges {

  subjects: any;

  subject: Subject;

  newSubject = false;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.resetForm();
  }

  ngOnChanges() {

  }

  onSubmit(): void {
    this.chatService.createSubject(this.subject.title, this.subject.subtitle,
      this.subject.description, 'angular');
    this.newSubject = false;
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (!isNullOrUndefined(form)) {
      form.reset();
    }

    this.subject = {
      title: '',
      subtitle: '',
      description: ''
    };
  }


}
