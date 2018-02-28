import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../shared/service/authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'comp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMsg: string;

  constructor(private authenticateService: AuthenticateService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('login() called from login-form component');
    this.authenticateService.login(this.email, this.password)
      .then(resolve => {
        console.log(resolve);
        this.router.navigate(['chat']);
      })
      .catch(error => this.errorMsg = error.message);
  }

}
