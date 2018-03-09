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

  constructor(private authenticateService: AuthenticateService, private router: Router) {
    /*if (this.authenticateService.authUser()) {
      this.router.navigate(['chat']);
    }*/
  }

  ngOnInit() {
  }

  signInWithEmailAndPassword() {
    console.log('login() ....');
    this.authenticateService.signInWithEmailAndPassword(this.email, this.password)
      .then(resolve => {
        console.log(resolve);
        this.router.navigate(['chat']);
      })
      .catch(error => this.errorMsg = error.message);
  }

  signInWithFacebook() {
    console.log('login() called from login-form component');
    this.authenticateService.signInWithFacebook()
      .then(resolve => {
        console.log(resolve);
        this.router.navigate(['chat']);
      })
      .catch(error => this.errorMsg = error.message);
  }

  signInWithGoogle() {
    console.log('login() called from login-form component');
    this.authenticateService.signInWithGoogle()
      .then(resolve => {
        console.log(resolve);
        this.router.navigate(['chat']);
      })
      .catch(error => this.errorMsg = error.message);
  }

}
