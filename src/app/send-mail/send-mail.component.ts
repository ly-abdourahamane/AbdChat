import {Component, OnInit} from '@angular/core';
import {MailData} from '../shared/models/message';
import {isNullOrUndefined} from 'util';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'comp-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {

  mailData: MailData;

  constructor() {
  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(): void {

  }

  resetForm(form?: NgForm) {
    if (!isNullOrUndefined(form)) {
      form.reset();
    }

    this.mailData = {
      mail: '',
      firstName: '',
      lastName: '',
      message: ''
    };
  }
}
