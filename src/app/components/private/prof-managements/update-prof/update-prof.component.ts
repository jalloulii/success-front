import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProfService } from 'src/app/services/profs-services/prof.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user/user.module';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-prof',
  templateUrl: './update-prof.component.html',
  styleUrls: ['./update-prof.component.scss', '../../dashboard/dashboard.component.scss', './../../why-us/why-us.component.scss', './../../user-managements/user-managements.component.scss']
})
export class UpdateProfComponent implements OnInit {


  //zedneh ahna lel form : 
  public updateProf: FormGroup;

  constructor(public fb: FormBuilder, private profservice: ProfService, private router: Router, private activeroute: ActivatedRoute, private toastr: ToastrService) {
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
    this.updateProf = fb.group(updateUserController); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
    let userId = this.activeroute.snapshot.params.id;
    this.profservice
      .getOneProf(userId)
      .subscribe(res => {
        let user = res; this.updateProf
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

  get myfirstname() { return this.updateProf.get('firstname'); }
  get mylastname() { return this.updateProf.get('lastname'); }
  get myemail() { return this.updateProf.get('email'); }



  updateInfoProf() {
    let userId = this.activeroute.snapshot.params.id;
    let data = this.updateProf.value;
    let user = new User(null, data.firstname, data.lastname, data.email, null);
    this.profservice.updateForm(userId, user).subscribe(res => {
      this.router.navigateByUrl('/profs-list');
      this.toastr.success('Instructor Updated Successfully!');
    }, err => { console.log("Instructor not updated"); })
  }

}