import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticateService {

  private user: Observable<firebase.User>;
  private authState: any;

  constructor(private afAuth: AngularFireAuth, private database: AngularFireDatabase, private router: Router) {
    this.user = afAuth.authState;
  }

  authUser() {
    return this.user;
  }

  getUs() {
    const path = `/users/${this.currentUserId}`;
    return this.database.object(path);
  }

  getUser(userId) {
    return this.database.object('/users/' + userId);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((resolve) => {
        const status = 'online';
        this.setUserStatus(status);
      }).catch(error => console.log(error));
  }

  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((resolve) => {
        const status = 'online';
        this.setUserStatus(status);
      }).catch(error => console.log(error));
  }

  signInWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((resolve) => {
        const status = 'online';
        this.setUserStatus(status);
      }).catch(error => console.log(error));
  }

  signUp(email: string, password: string, displayName: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        const status = 'online';
        this.setUserData(email, displayName, status);
      }).catch(error => console.log(error));
  }

  setUserData(email: string, displayName: string, status: string): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      email: email,
      displayName: displayName,
      status: status
    };
    this.database.object(path).update(data)
      .catch(error => console.log(error));
  }

  setUserStatus(status: string): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      status: status
    };

    this.database.object(path).update(data)
      .catch(error => console.log(error));
  }
}
