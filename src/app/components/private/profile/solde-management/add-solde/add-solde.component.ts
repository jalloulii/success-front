import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-services/course.service';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-solde',
  templateUrl: './add-solde.component.html',
  styleUrls: ['./add-solde.component.scss', '../../../dashboard/dashboard.component.scss', './../../../user-managements/user-managements.component.scss', './../../../why-us/why-us.component.scss']
})
export class AddSoldeComponent implements OnInit {
  addSoldeForm: FormGroup
  isLoggedIn: Boolean;
  isLogedAdmin: Boolean;
  courses_false: String;
  Uid: String;
  solde: Number;
  constructor(private courseService: CourseService, private userService: UserServiceService, private fb: FormBuilder, private router: Router) {
    let formControls = {
      _add_solde: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),

    }

    this.addSoldeForm = this.fb.group(formControls);
  }
  get ammountPuted() { return this.addSoldeForm.get('_add_solde') };
  ngOnInit(): void {

    let token = localStorage.getItem("token");

    if (token) {
      const help = new JwtHelperService();
      const solde = help.decodeToken(token).solde;
      const id = help.decodeToken(token).id;
      this.Uid = id;
      this.solde = solde;
    }

    this.isLoggedIn = this.userService.isLoggedIn();
    this.isLogedAdmin = this.userService.isLoggedAdmin()
    this.falseCourses();


  }
  falseCourses() {
    this.courseService.allFalseCourses().subscribe(res => {
      this.courses_false = res;
      this.falseCourses();
    })
  }
  addSoldef() {
    let token = localStorage.getItem("token");
    const help = new JwtHelperService();
    let id = help.decodeToken(token).id;
    this.userService.addSolde(id).subscribe(res => {

      console.log(res.message)
    },
      err => {
        console.log("eroor")
      }
    )
  }
}