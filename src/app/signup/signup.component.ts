import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../shared/service/authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'comp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;
  displayName: string;
  errorMsg: string;

  constructor(private authenticateService: AuthenticateService, private router: Router) { }

  ngOnInit() {

  }

  signUp() {
    const email = this.email;
    const password = this.password;
    const displayName = this.displayName;

    this.authenticateService.signUp(email, password, displayName)
      .then(resolve => this.router.navigate(['chat']))
      .catch(error => this.errorMsg = error.message);
  }
}
