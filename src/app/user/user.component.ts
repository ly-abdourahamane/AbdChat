import {Component, Input, OnInit} from '@angular/core';
import {UserData} from '../shared/models/user';

@Component({
  selector: 'comp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: UserData;

  constructor() {
  }

  ngOnInit() {
  }

}
