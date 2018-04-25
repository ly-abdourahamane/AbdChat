import {AfterViewInit, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Course, Subject} from '../../../shared/models/courses';
import {CourseService} from '../../../shared/service/course.service';

@Component({
  selector: 'comp-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns = ['title', 'subtitle', 'description'];
  dataSource: MatTableDataSource<Subject>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subjectList: Subject[] = [];

  constructor(private courseService: CourseService) {

  }

  ngOnInit() {
   this.getSubjectList();
  }

  ngOnChanges() {
    this.getSubjectList();
  }

  getSubjectList(): void {
    const subjects = this.courseService.getSubjectList('angular');

    subjects.snapshotChanges().subscribe(items => {
      this.subjectList = [];
      items.forEach(element => {
        const course = element.payload.toJSON();
        course['$key'] = element.key;
        this.subjectList.push(course as Subject);
        });
      this.dataSource = new MatTableDataSource(this.subjectList);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // suppression du blanc
    filterValue = filterValue.toLowerCase(); // mise en minuscule ...
    this.dataSource.filter = filterValue;
  }
}
