import { Component, OnInit } from '@angular/core';
import {ChatService} from '../shared/service/chat.service';

@Component({
  selector: 'comp-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  message: string;

  constructor(private  chatService: ChatService) { }

  ngOnInit() {
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

}
