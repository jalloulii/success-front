import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/user/user.module';

import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../login/login.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router,
    private toastr: ToastrService
  ) {
    let registerFormControl = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),

      ]),

    }
    this.registerForm = this.fb.group(registerFormControl);
  }
  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl("/dashboard")
    }
  }
  registerUser() {
    let data = this.registerForm.value;

    let user = new User(
      null,
      data.firstname,
      data.lastname,
      data.email,
      data.password,
    );
    this.userService.registerUser(user).subscribe(
      res => {

        this.toastr.success(res.message);
        this.router.navigateByUrl('/login');
      },
      err => {
        console.log(err);
        this.toastr.error(err.error.message);
      }
    )
  }
}
