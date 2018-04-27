import {Component, Input, OnInit} from '@angular/core';
import {DiscussionMessage} from '../../../../shared/models/courses';

@Component({
  selector: 'comp-display-onion',
  templateUrl: './display-onion.component.html',
  styleUrls: ['./display-onion.component.css']
})
export class DisplayOnionComponent implements OnInit {

  @Input() row: DiscussionMessage;

  nbLike: number;

  constructor() { }

  ngOnInit() {
    this.nbLike = 0;
  }

  like() {
    this.nbLike++;
  }

  notLike() {
    if (this.nbLike > 0) {
      this.nbLike--;
    }
  }
}
