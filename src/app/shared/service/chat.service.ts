import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {isNullOrUndefined} from 'util';

@Injectable()
export class ChatService {

  user: firebase.User;
  chatMessages: any;
  chatMessage: any;
  photoUrl: string;
  email: string;
  phoneNumber: string;
  creationTime: string;
  lastSignInTime: string;
  displayName: string;

  constructor(private database: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.getUserData();
    console.log('CHAT SERVICE CONSTRUCTOR');
    this.afAuth.authState.subscribe(x => console.log(x));
  }

  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.database.object(path);
  }

  getUser_(userId) {
    console.log('/users/' + userId);
    return this.database.object('/users/' + userId);
  }

  getUsers() {
    const path = `/users/`;
    return this.database.list(path);
  }

  getUserData() {
    console.log('get user data');
    this.afAuth.authState.subscribe(auth => {
      if (!isNullOrUndefined(auth)) {

        console.log(auth);

        this.displayName = auth.displayName;
        this.email = auth.email;
        this.photoUrl = auth.photoURL;
        this.phoneNumber = auth.phoneNumber;
        this.creationTime = auth.metadata.creationTime;
        this.lastSignInTime = auth.metadata.lastSignInTime;
      }
    }, error2 => console.log(error2));
  }

  sendMessage(message: string) {
    const timestemp = this.getTimeStamp();

    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      displayName: this.displayName,
      email: this.email,
      message: message,
      timeSent: timestemp,
      photoUrl: this.photoUrl,
      phoneNumber: this.phoneNumber,
      creationTime: this.creationTime,
      lastSignInTime: this.lastSignInTime
    });

    console.log('Called sendMessage() !');
  }

  getDisplayName() {
    return this.displayName;
  }

  getMessages(): AngularFireList<any[]> {
    console.log('calling getMessages...');
    return this.database.list('messages',  ref => {
      const query = ref.limitToLast(90000).orderByKey();
      return query;
    });
  }

  private getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();

    const time = now.getUTCHours() + 1 + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();

    return (date + ' ' + time);
  }
}
