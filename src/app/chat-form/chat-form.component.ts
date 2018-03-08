import { Component, OnInit } from '@angular/core';
import {ChatService} from '../shared/service/chat.service';

@Component({
  selector: 'comp-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  message: string;
  text: string;
  openPopup: Function;

  constructor(private  chatService: ChatService) { }

  ngOnInit() {
    this.text = '';
    this.message = '';
  }

  send() {
    console.log(this.message);
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

  setPopupAction(event: any) {
    console.log('setPopupAction');
    console.log(event);
    this.openPopup = event;
    if (event.keyCode === 13) {
      this.send();
    }
  }

}
