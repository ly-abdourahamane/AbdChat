import {Component, NgZone, OnInit, ViewEncapsulation} from '@angular/core';

import { Picker } from 'emoji-mart';
import { Emoji } from 'emoji-mart';
import {Observable} from 'rxjs/Observable';
import {isNullOrUndefined} from 'util';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {UserData} from './shared/models/user';
import {AuthenticateService} from './shared/service/authenticate.service';
import {CdkScrollable, ScrollDispatcher} from '@angular/cdk/scrolling';
import {map} from 'rxjs/operators';


@Component({
  selector: 'comp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  user: Observable<firebase.User>;
  userData: any;
  userEmail: string;
  displayName: string;

  visibleSidebar: boolean;
  visibleMenu: boolean;

  userName: string;

  isShrunk = false;

  constructor(private authenticateService: AuthenticateService, private router: Router,
              private scrollDispatcher: ScrollDispatcher,
              private ngZone: NgZone, zone: NgZone
              ) {
    this.user = this.authenticateService.authUser();

    this.user.subscribe(user => {
      if (user) {
        this.userData = user;
        this.userEmail = user.email;
        this.displayName = user.displayName;
      }
    }, error => console.log(error));


    window.onscroll = () => {
      zone.run(() => {
        console.log(window.pageXOffset, window.pageYOffset);
        if (window.pageYOffset > 0) {
          this.isShrunk = true;
        } else {
          this.isShrunk = false;
        }
      });
    };
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
      } else {
        // REDIRECTION VERS LA PAGE DE CONNEXION S'IL N'EST IDENTIFIÉ
        this.router.navigate(['connexion']);
      }
    });
  }


  logout() {
    this.authenticateService.logout();
  }

  login() {
    // TODO: À COMPLETER !!!
    this.router.navigate(['connexion']);
  }

  /**
   * PERMET D'ENVOYER UN MAIL
   */
   sendMail() {
    this.router.navigate(['/nous-contacter']);
  }
}
