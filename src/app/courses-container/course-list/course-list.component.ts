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

  // To sort
  isDesc: boolean;
  column: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    const courses = this.courseService.getCourseData('cours');

    courses.snapshotChanges().subscribe(items => {
      this.courseList = [];
      items.forEach(element => {
        const course = element.payload.toJSON();
        course['$key'] = element.key;
        this.courseList.push(course as Course);

        this.sort('name');
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

  sort(args: string) {
    // Change the direction if it's the same column
    if (this.column === args) {
      this.isDesc = !this.isDesc;
    }
    this.column = args;
    const direction = this.isDesc ? -1 : 1;

    this.courseList.sort(function (a, b) {
      if (a[args] < b[args]) {
        return -1 * direction;
      } else if (a[args] > b[args]) {
        return direction;
      } else {
        return 0;
      }
    });
  }

}
