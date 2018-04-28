import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../shared/service/authenticate.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'comp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMsg: string;

  hide = true; // permet de cacher ou d'afficher le mot de passe

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private authenticateService: AuthenticateService, private router: Router) {
    /*if (this.authenticateService.authUser()) {
      this.router.navigate(['chat']);
    }*/
  }

  ngOnInit() {
  }

  signInWithEmailAndPassword() {
    this.authenticateService.signInWithEmailAndPassword(this.email, this.password)
      .then(resolve => {
        this.router.navigate(['chat']);
      })
      .catch(error => this.errorMsg = error.message);
  }

  signInWithFacebook() {
    this.authenticateService.signInWithFacebook()
      .then(resolve => {
        this.router.navigate(['chat']);
      })
      .catch(error => this.errorMsg = error.message);
  }

  signInWithGoogle() {
    this.authenticateService.signInWithGoogle()
      .then(resolve => {
        this.router.navigate(['chat']);
      })
      .catch(error => this.errorMsg = error.message);
  }

}
