import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"; // zedna hedhy
import { Router } from '@angular/router';
import { User } from 'src/app/user/user.module';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { ToastrService } from 'ngx-toastr'
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss', './../../dashboard/dashboard.component.scss']
})
export class AddCourseComponent implements OnInit {

  //zedneh ahna lel form : 
  public addUeser: FormGroup;

  constructor(public fb: FormBuilder,
    private router: Router,
    private userService: UserServiceService,
    private toastr: ToastrService,
    private http: HttpClient,

  ) {
    // zedneh ahna lel control
    let addUserControll = {
      firstname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
        Validators.pattern("[A-Za-z0-9 .'-]+"), // regEx , expression reguliaire
      ]),
      lastname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[0-9]+"),
      ]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
        Validators.pattern("[A-Za-z0-9 .'-]+"), // regEx , expression reguliaire
      ]),
    }
    // zedna edha lel liaison inputs to form
    this.addUeser = fb.group(addUserControll); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
  }

  // function errors 

  get myfirstname() { return this.addUeser.get('firstname'); }
  get mylastname() { return this.addUeser.get('lastname'); }
  get mydescription() { return this.addUeser.get('description'); }


  uploadedFiles: Array<File>;

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }


  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post('/api/upload', formData)
      .subscribe((response) => {
        console.log('response received is ', response);
      })
  }


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
