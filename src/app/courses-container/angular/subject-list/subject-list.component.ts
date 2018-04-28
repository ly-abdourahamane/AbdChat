import {AfterViewInit, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Subject} from '../../../shared/models/courses';
import {CourseService} from '../../../shared/service/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'comp-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],

  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: -5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1}),
          ]))
        ]), {optional: true})

      ])
    ])
  ]
})
export class SubjectListComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns = ['title', 'subtitle', 'description'];
  dataSource: MatTableDataSource<Subject>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  path: string;

  subjectList: Subject[] = [];

  constructor(private courseService: CourseService, private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.path = params.path;
    }, error => console.log(error));
  }

  ngOnInit() {
   this.getSubjectList();
  }

  ngOnChanges() {
    this.getSubjectList();
  }

  getSubjectList(): void {
    const subjects = this.courseService.getSubjectList(this.path);

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

  selection_(row: any) {
    this.router.navigate(['cours/' + this.path + '/' + row.title]);
  }
}
