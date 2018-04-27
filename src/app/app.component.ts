import {Component, OnInit, ViewEncapsulation} from '@angular/core';

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
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
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
        this.userEmail = user.email;
        this.displayName = user.displayName;
      }
    }, error => console.log(error));
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
          }}, error => console.log(error));
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

  sendMail() {
    console.log('send mail');
    this.router.navigate(['/nous-contacter']);
  }
}
