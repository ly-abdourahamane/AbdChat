import {Injectable} from '@angular/core';
import {Course} from '../models/courses';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class CourseService {

  selectedCourse: Course = new Course();
  courseList: AngularFireList<any>;

  constructor(private database: AngularFireDatabase) {

  }

  getCourseData() {
    this.courseList = this.database.list('cours', ref => {
      const query = ref.limitToLast(900000).orderByKey();
      return query;
    });

    return this.courseList;
  }

  insertCourse(course: Course) {
    const timestemp = this.getTimeStamp();
    this.getCourseData();

    this.courseList.push({
      name: course.name,
      path: course.path,
      description: course.description,
      creationTime: timestemp
    });
  }

  updateCourse(course: Course) {
    const timestemp = this.getTimeStamp();
    this.courseList.update(course.$key, {
    name: course.name,
    path: course.path,
    description: course.description,
    creationTime: timestemp
    });
  }

  deleteCourse(key: string) {
    this.courseList.remove(key);
  }

  private getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 2) + '/' +
      now.getUTCDate();

    const time = now.getUTCHours() + 2 + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();

    return (date + ' ' + time);
  }


}
