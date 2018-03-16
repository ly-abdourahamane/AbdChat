import {Component, OnInit} from '@angular/core';

import { Picker } from 'emoji-mart';
import { Emoji } from 'emoji-mart';
import {Observable} from 'rxjs/Observable';
import {isNullOrUndefined} from 'util';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {UserData} from './shared/models/user';
import {AuthenticateService} from './shared/service/authenticate.service';


@Component({
  selector: 'comp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
        console.log(user);
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
          console.log(user_);
          this.userName = user_.displayName;

          console.log(this.displayName);

          if (isNullOrUndefined(this.displayName)) {
            this.displayName = this.userName;
          }

          console.log(this.displayName);
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

  /**
   * PERMET D'ENVOYER UN MAIL
   */
  contactMe() {

  }
}
