import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../shared/service/course.service';
import {Course} from '../../shared/models/courses';
import {NgForm} from '@angular/forms';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'comp-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  selectedCourse: Course;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.selectedCourse = this.courseService.selectedCourse;
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    console.log(form.value.$key);
    if (isNullOrUndefined(form.value.$key)) {
      this.courseService.insertCourse(form.value);
    } else {
      this.courseService.updateCourse(form.value);
    }
    this.resetForm(form);
  }

  onDelete(form: NgForm) {
    if (confirm('Voulez vous vraiment supprimer ce cours ?') === true) {
      this.courseService.deleteCourse(form.value.$key);
      this.resetForm();
    }
  }

  resetForm(form?: NgForm) {
    if (!isNullOrUndefined(form)) {
      form.reset();
    }

    this.courseService.selectedCourse = {
      $key: null,
      name: '',
      path: '',
      description: '',
      creationTime: ''
    };
  }
}
