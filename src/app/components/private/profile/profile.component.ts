import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-services/course.service';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/user/user.module';
import { ProfService } from 'src/app/services/profs-services/prof.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', './../user-managements/user-managements.component.scss', '../dashboard/dashboard.component.scss', './../why-us/why-us.component.scss']
})
export class ProfileComponent implements OnInit {
  // calculatedWidth=100;
  isLoggedIn: Boolean;
  isLogedAdmin: Boolean;
  isLogedProf: Boolean;
  isLogedUser: Boolean;
  courses_false: String;

  TProfsCourses = [];
  FProfsCourses = [];
  allCoursesProf = [];
  public name: String;
  public role: String;

  Uid: String;
  solde: Number;

  url = "assets/imgs/avatar-default-profile.png";
  uploadedFile: File;

  public updateUser: FormGroup;
  constructor(private courseService: CourseService, public fb: FormBuilder,
    private profService: ProfService,
    private userService: UserServiceService,
    private router: Router,
    private activeroute: ActivatedRoute,
    private toastr: ToastrService,) {
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
  get myfirstname() { return this.updateUser.get('firstname'); }
  get mylastname() { return this.updateUser.get('lastname'); }
  get myemail() { return this.updateUser.get('email'); }
  ngOnInit(): void {

    let token = localStorage.getItem("token");
    const help = new JwtHelperService();
    const id = help.decodeToken(token).id;
    if (token) {
      const solde = help.decodeToken(token).solde;
      const id = help.decodeToken(token).id;
      const name = help.decodeToken(token).welcomename;
      const role = help.decodeToken(token).role;
      this.Uid = id;
      this.solde = solde;
      this.role = role;
      this.name = name;
    }
    this.userService
      .getOneUser(id)
      .subscribe(res => {
        let user = res;
        console.log(user);
        this.url = "http://localhost:3000/" + user.image;
        this.updateUser
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


    this.isLoggedIn = this.userService.isLoggedIn();
    this.isLogedAdmin = this.userService.isLoggedAdmin()
    this.isLogedProf = this.userService.isLoggedProf()
    this.isLogedUser = this.userService.isLoggedUser()
    this.falseCourses();
    this.getUniqueProfsCourses();
  }
  resetImg() {
    this.url = "assets/imgs/avatar-default-profile.png"
  }


  falseCourses() {
    this.courseService.allFalseCourses().subscribe(res => {
      this.courses_false = res;
      this.falseCourses();
    })
  }

  updateInfoUser() {
    let userId = new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let data = this.updateUser.value;
    let user = new User(null, data.firstname, data.lastname, data.email, null);
    // change IMG :
    let formData = new FormData();
    formData.append("image", this.uploadedFile, this.uploadedFile.name);
    formData.append("data", JSON.stringify(user));

    this.userService.updateFormPROFILE(userId, formData).subscribe(res => {
      this.toastr.success(res.message);

    }, err => { console.log("user not updated"); })
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed  
        this.url = (event.target as FileReader).result.toString();
      }
    }
    this.uploadedFile = event.target.files[0];
    this.toastr.success('GOOD! now click the UPDATE USER button to save it in your profile');
  }
  getUniqueProfsCourses() {
    let token = localStorage.getItem("token");
    const help = new JwtHelperService();
    const id = help.decodeToken(token).id;
    this.profService.getUniqueProfsCourses(id).subscribe(res => {
      this.TProfsCourses = res.TuniqueProfCourses;
      this.FProfsCourses = res.FuniqueProfCourses;
      this.allCoursesProf = res.AlluniqueProfCourses;
    })
  }
}
