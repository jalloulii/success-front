import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"; // zedna hedhy
import { Router } from '@angular/router';
import { User, Course } from 'src/app/user/user.module';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { ToastrService } from 'ngx-toastr'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CourseService } from 'src/app/services/course-services/course.service';
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
    private courseSerivce: CourseService,
    private toastr: ToastrService,
    private http: HttpClient,

  ) {
    // zedneh ahna lel control
    let addUserControll = {
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
        Validators.pattern("[A-Za-z0-9 .'-]+"), // regEx , expression reguliaire
      ]),
      price: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]+"),
      ]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
        Validators.pattern("[A-Za-z0-9 .'-]+"), // regEx , expression reguliaire
      ]),
      lesson_body: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
      ]),
    }
    // zedna edha lel liaison inputs to form
    this.addUeser = fb.group(addUserControll); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {
  }

  // function errors 

  get mytitle() { return this.addUeser.get('title'); }
  get myprice() { return this.addUeser.get('price'); }
  get mydescription() { return this.addUeser.get('description'); }
  get mylesson_body() { return this.addUeser.get('lesson_body'); }


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


  addCourse() {
    let data = this.addUeser.value;
    let price = data.price;
    if (price == 0) {
      price = "free";
    }
    let course = new Course(
      null,
      data.title,
      data.description,
      price,
      null,
      data.lesson_body,
    );
    this.courseSerivce.addCourse(course).subscribe(
      res => {
        console.log(res);
        this.toastr.success("Course Added successfully");
        this.router.navigateByUrl('/courses-list')
      },
      err => {
        this.toastr.error("Error Adding User");
      }
    )
  }


}