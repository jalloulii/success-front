import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"; // zedna hedhy

import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { User } from 'src/app/user/user.module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss', '../../dashboard/dashboard.component.scss', './../../why-us/why-us.component.scss', './../user-managements.component.scss']
})
export class UpdateUserComponent implements OnInit {

  //zedneh ahna lel form : 
  public updateUser: FormGroup;

  constructor(public fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router,
    private activeroute: ActivatedRoute,
    private toastr: ToastrService) {
    // zedneh ahna lel control
    let updateUserController = {
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

      ])

    }
    // zedna edha lel liaison inputs to form
    this.updateUser = fb.group(updateUserController); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
    let userId = this.activeroute.snapshot.params.id;
    this.userService
      .getOneUser(userId)
      .subscribe(res => {
        let user = res; this.updateUser
          .patchValue(
            {
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,


            }
          )
      }, err => {
        console.log(err);
      })



  }

  // function errors 

  get myfirstname() { return this.updateUser.get('firstname'); }
  get mylastname() { return this.updateUser.get('lastname'); }
  get myemail() { return this.updateUser.get('email'); }



  updateInfoUser() {
    let userId = this.activeroute.snapshot.params.id;
    let data = this.updateUser.value;
    let user = new User(null, data.firstname, data.lastname, data.email, null);
    this.userService.updateForm(userId, user).subscribe(res => {
      console.log("User Info Updated");
      this.toastr.success(res.message);
      console.log(res);
      this.router.navigateByUrl('/user-list')
    }, err => {
      console.log("User not updated");
      this.toastr.success(err.message);
    })
  }

}
