import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireList} from 'angularfire2/database/interfaces';

import * as firebase from 'firebase/app';
import {Message} from '../models/message';
import {UserData} from '../models/user';

@Injectable()
export class ChatService {

  user: firebase.User;
  chatMessages: AngularFireList<Message[]>;
  chatMessage: Message;
  userName: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }

      this.getUser().valueChanges().subscribe((user: UserData) => {
        console.log(user);
        this.userName = user.displayName;
      });
    });
  }

  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path);
  }

  getUsers() {
    const path = `/users/`;
    return this.db.list(path);
  }

  sendMessage(message: string) {
    const timestemp = this.getTimeStamp();
    console.log(timestemp);
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push([{
      userName: this.userName,
      email: email,
      message: message,
      timeSent: timestemp
    }]);

    console.log('Called sendMessage() !');
  }

  getMessages(): AngularFireList<Message[]> {
    console.log('calling getMessages...');
    return this.db.list('messages',  ref => {
      const query = ref.limitToLast(25).orderByKey();
      return query;
    });
  }

  getTimeStamp() {
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
