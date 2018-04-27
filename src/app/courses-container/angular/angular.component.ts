import {Component, OnChanges, OnInit} from '@angular/core';
import {ChatService} from '../../shared/service/chat.service';
import {NgForm} from '@angular/forms';
import {isNullOrUndefined} from 'util';
import {Subject} from '../../shared/models/courses';
import {ActivatedRoute} from '@angular/router';
import {UserData} from '../../shared/models/user';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AuthenticateService} from '../../shared/service/authenticate.service';

@Component({
  selector: 'comp-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit, OnChanges {

  subject: Subject;

  newSubject = false;

  path: string;

  displayName: string;
  user: Observable<firebase.User>;

  constructor(private chatService: ChatService,
              private authenticateService: AuthenticateService,
              private activatedRoute: ActivatedRoute) {

    /*RECUPERATION DU SUJET CHOISI S'IL EST VALIDE*/
    this.activatedRoute.params.subscribe(params => {
      this.path = params.path;
    }, error => console.log(error));

    this.getUserData();
  }

  ngOnInit() {
    this.resetForm();
  }

  ngOnChanges() {

  }

  onSubmit(): void {
    this.chatService.createSubject(this.subject.title, this.subject.subtitle,
      this.subject.description, this.displayName, this.path);
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
      description: '',
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
