import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"; // zedna hedhy
import { Router } from '@angular/router';
import { User } from 'src/app/user/user.module';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss', '../../dashboard/dashboard.component.scss', './../../why-us/why-us.component.scss','./../user-managements.component.scss']
})
export class AddUserComponent implements OnInit {

  //zedneh ahna lel form : 
  public addUeser: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, private userService: UserServiceService, private toastr: ToastrService) {
    // zedneh ahna lel control
    let addUserControll = {
      firstname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
        Validators.pattern("[A-Za-z .'-]+"), // regEx , expression reguliaire
      ]),
      lastname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Za-z .'-]+"),
      ]),
      // bch nmanipuliw les inputs !!
      email: new FormControl("", [
        Validators.required,

        Validators.email,

      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),

      ])

    }
    // zedna edha lel liaison inputs to form
    this.addUeser = fb.group(addUserControll); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
  }

  // function errors 

  get myfirstname() { return this.addUeser.get('firstname'); }
  get mylastname() { return this.addUeser.get('lastname'); }
  get myemail() { return this.addUeser.get('email'); }
  get myphone() { return this.addUeser.get('phone'); }
  get mypassword() { return this.addUeser.get('password'); }
  get myRpassword() { return this.addUeser.get('confirmPassword'); }

  //zedna function edhy bch les donnes yemchiw ml html lel TS !!

  addUser() {
    let data = this.addUeser.value;

    let user = new User(
      null,
      data.firstname,
      data.lastname,
      data.email,
      data.password,
    );
    this.userService.registerUser(user).subscribe(
      res => {
        console.log(res);
        this.toastr.success("User Added successfully");
        this.router.navigateByUrl('/user-list')
      },
      err => {
        this.toastr.error("Error Adding User");
      }
    )
  }

}
