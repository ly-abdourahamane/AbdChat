import {Component, OnChanges, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ChatService} from '../shared/service/chat.service';

@Component({
  selector: 'comp-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

  feed: Observable<any>;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.feed = this.chatService.getMessages().valueChanges();
    console.log('feed initializeed');
  }

  ngOnChanges() {
    this.feed = this.chatService.getMessages().valueChanges();
  }

}
