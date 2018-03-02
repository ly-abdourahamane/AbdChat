import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {AuthenticateService} from '../shared/service/authenticate.service';

@Component({
  selector: 'comp-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user: Observable<firebase.User>;
  userEmail: string;
  displayName: string;

  constructor(private authenticateService: AuthenticateService, private router: Router) { }

  ngOnInit() {
    this.user = this.authenticateService.authUser();
    this.user.subscribe(user => {
      if (user) {
        console.log(user);
        this.userEmail = user.email;
        this.displayName = user.displayName;
      }
    });
  }

  logout() {
    this.authenticateService.logout();
  }

  login() {
    // TODO: À COMPLETER !!!
    this.router.navigate(['login']);
  }
}
