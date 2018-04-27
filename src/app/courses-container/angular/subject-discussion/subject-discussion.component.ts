import {AfterViewInit, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../../shared/service/course.service';
import {DiscussionMessage} from '../../../shared/models/courses';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {isNullOrUndefined} from "util";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'comp-subject-discussion',
  templateUrl: './subject-discussion.component.html',
  styleUrls: ['./subject-discussion.component.css']
})
export class SubjectDiscussionComponent implements OnInit, OnChanges, AfterViewInit {

  subjectTitle: string;

  displayedColumns = ['opinion'];
  dataSource: MatTableDataSource<DiscussionMessage>;
  opinionsList: DiscussionMessage[];
  discussionMessage: DiscussionMessage;

  nbLike: number;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute) {

    /*RECUPERATION DU SUJET CHOISI S'IL EST VALIDE*/
    this.activatedRoute.params.subscribe(params =>  {
      this.subjectTitle = params.title;
    }, error => console.log(error));
  }


  ngOnInit() {
    this.getOpinionsList();
    this.discussionMessage = this.courseService.discussionMessage;
    this.resetForm();
    this.nbLike = 0;
  }

  ngOnChanges() {
    this.getOpinionsList();
  }

  getOpinionsList(): void {
    const path = 'angular/' + this.subjectTitle;
    console.log(path);
    const discutions = this.courseService.getDiscussionMessageData(path);

    discutions.snapshotChanges().subscribe(items => {
      this.opinionsList = [];
      items.forEach(element => {
        const opinion = element.payload.toJSON();
        opinion['$key'] = element.key;
        this.opinionsList.push(opinion as DiscussionMessage);
      });
      this.dataSource = new MatTableDataSource(this.opinionsList);

      console.log(this.opinionsList);
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

  onSubmit(form: NgForm) {
    console.log(form);
    const path = 'angular/' + this.subjectTitle;
    if (isNullOrUndefined(form.value.$key)) {
      this.courseService.insertMessageInDiscussion(form.value, path);
      this.opinionsList.push(form.value as DiscussionMessage);
    }

    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (!isNullOrUndefined(form)) {
      form.reset();
    }

    this.courseService.discussionMessage =  this.discussionMessage = {
      $key: null,
      opinion: '',
      creationTime: ''
    };
  }

  like() {
    this.nbLike ++;
  }

  notLike() {
    if (this.nbLike > 0) {
      this.nbLike --;
    }
  }
}
