import {AfterViewInit, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../../shared/service/course.service';
import {DiscussionMessage} from '../../../shared/models/courses';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {isNullOrUndefined} from 'util';
import {NgForm} from '@angular/forms';
import {ToolbarComponent} from '../../../toolbar/toolbar.component';
import {ChatService} from '../../../shared/service/chat.service';
import {UserData} from '../../../shared/models/user';
import {AuthenticateService} from '../../../shared/service/authenticate.service';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'comp-subject-discussion',
  templateUrl: './subject-discussion.component.html',
  styleUrls: ['./subject-discussion.component.css']
})
export class SubjectDiscussionComponent implements OnInit, OnChanges, AfterViewInit {

  subjectTitle: string;

  displayedColumns = ['opinion'];
  dataSource: MatTableDataSource<DiscussionMessage>;
  opinionsList: DiscussionMessage[] = [];
  discussionMessage: DiscussionMessage;

  displayName: string;
  user: Observable<firebase.User>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private courseService: CourseService, private authenticateService: AuthenticateService,
              private chatService: ChatService, private activatedRoute: ActivatedRoute) {

    /*RECUPERATION DU SUJET CHOISI S'IL EST VALIDE*/
    this.activatedRoute.params.subscribe(params => {
      this.subjectTitle = params.title;
    }, error => console.log(error));

    this.getUserData();
  }


  ngOnInit() {
    this.getOpinionsList();
    this.discussionMessage = this.courseService.discussionMessage;
    this.resetForm();
  }

  ngOnChanges() {
    this.getOpinionsList();
  }

  getOpinionsList(): void {
    const path = 'angular/' + this.subjectTitle;
    const discussions = this.courseService.getDiscussionMessageData(path);

    discussions.snapshotChanges().subscribe(items => {
      this.opinionsList = [];
      items.forEach(element => {
        const opinion = element.payload.toJSON();
        opinion['$key'] = element.key;
        this.opinionsList.push(opinion as DiscussionMessage);
      });
      this.dataSource = new MatTableDataSource(this.opinionsList);
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
    const path = 'angular/' + this.subjectTitle;
    if (isNullOrUndefined(form.value.$key)) {
      this.courseService.insertMessageInDiscussion(form.value, this.displayName, path);
      this.opinionsList.push(form.value as DiscussionMessage);
    }

    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (!isNullOrUndefined(form)) {
      form.reset();
    }

    this.courseService.discussionMessage = this.discussionMessage = {
      $key: null,
      opinion: '',
      creationTime: '',
      displayName: ''
    };
  }


  getUserData() {
    this.user = this.authenticateService.authUser();

    this.user.subscribe(user => {
      if (user) {

        this.authenticateService.getUser(user.uid).valueChanges().subscribe((user_: UserData) => {
          this.displayName = user_.displayName;
        });
      }
    });
  }
}
