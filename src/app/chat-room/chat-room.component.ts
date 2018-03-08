import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'comp-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, AfterViewChecked {

  @ViewChild('scroller') private feedContainer: ElementRef;
  myMessageString = '';

  constructor() {
    this.myMessageString = ' :smile: I;; :joy:';
  }

  ngOnInit() {
  }

  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop
      = this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}
