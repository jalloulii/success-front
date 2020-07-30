import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { User } from 'src/app/user/user.module';

import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private userService: UserServiceService, private router: Router, private toastr: ToastrService) {
    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    }

    this.loginForm = this.fb.group(formControls);

  }
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl("/dashboard")
    }
  }

  loginUser() {
    let data = this.loginForm.value;

    let user = new User(
      null,
      null,
      null,
      data.email,
      data.password,
    );
    this.userService.loginUser(user).subscribe(
      res => {

        let token = res.token;
        localStorage.setItem("token", token);
        console.log(user);
        this.router.navigateByUrl('/dashboard');
        this.toastr.success('Logged In successfully!');

      },
      err => {
        console.log(err);
        this.toastr.error('email or password is incorrect!');
      }
    )
  }

}