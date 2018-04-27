import {Injectable} from '@angular/core';
import {Course, DiscussionMessage} from '../models/courses';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class CourseService {

  selectedCourse: Course = new Course();
  courseList: AngularFireList<any>;
  discussionMessageList: AngularFireList<any>;
  discussionMessage: DiscussionMessage;

  constructor(private database: AngularFireDatabase) {

  }

  getCourseData(path: string) {
    this.courseList = this.database.list(path, ref => {
      const query = ref.limitToLast(900000).orderByKey();
      return query;
    });

    return this.courseList;
  }

  insertCourse(course: Course, path: string) {
    const timestemp = this.getTimeStamp();
    this.getCourseData(path);

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

/* RECUPERATION DE LA LISTE DES SUJETS D'UN THEME*/
  getSubjectList(path: string) {
    return this.courseList = this.database.list(path, ref => {
      const query = ref.limitToLast(900000).orderByKey();
      return query;
    });
  }

  /* DISCUSSION SUR UN SUJET CHOISI*/

  getDiscussionMessageData(path: string) {
    console.log(path);
    this.discussionMessageList = this.database.list(path, ref => {
      const query = ref.limitToLast(900000).orderByKey();
      return query;
    });

    return this.discussionMessageList;
  }

  insertMessageInDiscussion(message: DiscussionMessage, displayName: string, path: string) {
    const timestemp = this.getTimeStamp();
    this.getDiscussionMessageData(path);

    this.discussionMessageList.push({
      opinion: message.opinion,
      creationTime: timestemp,
      displayName: displayName
    });
  }
}
