import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../shared/models/message';

@Component({
  selector: 'comp-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: any;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: string;
  isOwnMessage: boolean;

  constructor() { }

  ngOnInit(chatMessage = this.message) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.displayName;
  }
}
