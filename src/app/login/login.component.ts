import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: any;
  loading: boolean;

  constructor(
    private  formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: " ",
      password: " "
    });
  }

  onSubmit(loginData) {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
      .login(loginData.email, loginData.password)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigateByUrl("/");
          },
          error => {
              console.log(error);
          }
      );
      console.log("logged in!");
  }

}
