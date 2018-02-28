import { Component, OnInit } from '@angular/core';
import {UserData} from '../shared/models/user';
import {ChatService} from '../shared/service/chat.service';

@Component({
  selector: 'comp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: UserData[];

  constructor(chatService: ChatService) {
    chatService.getUsers().valueChanges().subscribe((users: UserData[]) => {
      this.users = users;
    });
  }

}
