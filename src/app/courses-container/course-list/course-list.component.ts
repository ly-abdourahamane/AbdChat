import {Component, OnChanges, OnInit} from '@angular/core';
import {CourseService} from '../../shared/service/course.service';
import {Course} from '../../shared/models/courses';

@Component({
  selector: 'comp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnChanges {

  courseList: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    const courses = this.courseService.getCourseData('cours');

    courses.snapshotChanges().subscribe(items => {
      this.courseList = [];
      items.forEach(element => {
        const course = element.payload.toJSON();
        course['$key'] = element.key;
        this.courseList.push(course as Course);
      });
    });
  }

  ngOnChanges() {
    const courses = this.courseService.getCourseData('cours');

    courses.snapshotChanges().subscribe(items => {
      this.courseList = [];
      items.forEach(element => {
        const course = element.payload.toJSON();
        course['$key'] = element.key;
        this.courseList.push(course as Course);
      });
    });
  }

  onCourseSelect(course: Course) {
    this.courseService.selectedCourse = Object.assign({}, course);
  }

}
