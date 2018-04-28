import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {AuthenticateService} from '../shared/service/authenticate.service';
import {isNullOrUndefined} from 'util';
import {UserData} from '../shared/models/user';

@Component({
  selector: 'comp-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user: Observable<firebase.User>;
  userData: any;
  userEmail: string;
  displayName: string;

  visibleSidebar: boolean;
  visibleMenu: boolean;

  userName: string;

  constructor(private authenticateService: AuthenticateService, private router: Router) {
    this.user = this.authenticateService.authUser();

    this.user.subscribe(user => {
      if (user) {
        this.userData = user;
        this.userEmail = user.email;
        this.displayName = user.displayName;

      }
    });
  }

  ngOnInit() {
    this.visibleSidebar = false;
    this.visibleMenu = false;

    this.user = this.authenticateService.authUser();

    this.user.subscribe(user => {
      if (user) {

        this.authenticateService.getUser(user.uid).valueChanges().subscribe((user_: UserData) => {
          this.userName = user_.displayName;

          if (isNullOrUndefined(this.displayName)) {
            this.displayName = this.userName;
          }
        });
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
