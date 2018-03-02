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

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.user = afAuth.authState;
    console.log(this.authState);
  }

   authUser() {
    return this.user;
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
        console.log(this.authState.uid);
        this.setUserStatus(status);
      }).catch(error => console.log(error));
  }

  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((resolve) => {
        const status = 'online';
        console.log(resolve);
        this.setUserStatus(status);
      }).catch(error => console.log(error));
  }

  signInWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((resolve) => {
        const status = 'online';
        console.log(resolve);
        const displayName = resolve.user.displayName;
        const email = resolve.user.email;

        this.setUserData(email, displayName, status);
        this.setUserStatus(status);
      }).catch(error => console.log(error));
  }

  signInWithAnonymous() {
    this.afAuth.auth.signInAnonymously();
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
    console.log(this.authState.uid);
    console.log( this.currentUserId);
    const path = `users/${this.currentUserId}`;
    const data = {
      email: email,
      displayName: displayName,
      status: status
    };
    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }

  setUserStatus(status: string): void {
    console.log(this.currentUserId);
    const path = `users/${this.currentUserId}`;
    const data = {
      status: status
    };

    this.db.object(path).update(data).then(x => console.log(x, '638546385463476343694+4325154646354164+65416341+645+64+6954+54+' +
      '9645'))
      .catch(error => console.log(error));
  }
}
