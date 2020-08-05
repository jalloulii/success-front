import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"; // zedna hedhy
import { Router, ActivatedRoute } from '@angular/router';
import { User, Course } from 'src/app/user/user.module';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { ToastrService } from 'ngx-toastr'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CourseService } from 'src/app/services/course-services/course.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProfService } from 'src/app/services/profs-services/prof.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss', './../../dashboard/dashboard.component.scss', './../../why-us/why-us.component.scss', './../../user-managements/user-managements.component.scss']
})
export class AddCourseComponent implements OnInit {

  //zedneh ahna lel form : 
  public addUeser: FormGroup;
  public idProf: String;
  constructor(public fb: FormBuilder,
    private router: Router,
    private userService: UserServiceService,
    private courseSerivce: CourseService,
    private toastr: ToastrService,
    private http: HttpClient,
    private activeroute: ActivatedRoute,
    private profService: ProfService

  ) {
    // zedneh ahna lel control
    let addUserControll = {
      profId: new FormControl("", [
        Validators.required,
        // regEx , expression reguliaire
      ]),
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
      quiz_question: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
      ]),
      quiz_choix_1: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
      ]),
      quiz_choix_2: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
      ]),
      quiz_choix_3: new FormControl("", [
        Validators.required,
        Validators.minLength(2),                                                              // new FormControl()  hoaa construtor
      ]),

      quiz_real_reply: new FormControl("", [
        Validators.required,                                                           // new FormControl()  hoaa construtor
      ]),
      categorie: new FormControl("", [
        Validators.required,                                                           // new FormControl()  hoaa construtor
      ]),
    }
    // zedna edha lel liaison inputs to form
    this.addUeser = fb.group(addUserControll); // amalna liaison bin les input w lformulaire !
  }

  ngOnInit(): void {


    let token = localStorage.getItem("token");
    const help = new JwtHelperService();
    const id = help.decodeToken(token).id;
    this.idProf = id;
    this.profService
      .getOneProf(id)
      .subscribe(res => {
        let prof = res; this.addUeser
          .patchValue(
            {
              profId: id,

            }
          )
      }, err => {
        console.log(err);
      })

  }

  // function errors 

  get myprofId() { return this.addUeser.get('profId'); }
  get mytitle() { return this.addUeser.get('title'); }
  get myprice() { return this.addUeser.get('price'); }
  get mydescription() { return this.addUeser.get('description'); }
  get mylesson_body() { return this.addUeser.get('lesson_body'); }
  get myquiz_question() { return this.addUeser.get('quiz_question'); }
  get myquiz_choix_1() { return this.addUeser.get('quiz_choix_1'); }
  get myquiz_choix_2() { return this.addUeser.get('quiz_choix_2'); }
  get myquiz_choix_3() { return this.addUeser.get('quiz_choix_3'); }
  get myquiz_real_reply() { return this.addUeser.get('quiz_real_reply'); }
  get mycategorie() { return this.addUeser.get('categorie'); }


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

    let course = new Course(
      null,

      data.title,
      data.description,
      price,
      data.lesson_body,
      data.quiz_question,
      data.quiz_choix_1,
      data.quiz_choix_2,
      data.quiz_choix_3,
      data.quiz_real_reply,
      data.profId,
      data.categorie,
    );
    this.courseSerivce.addCourse(course).subscribe(
      res => {
        console.log(res);
        this.toastr.success("Course Added successfully");
        this.router.navigateByUrl('/profile/' + data.profId)
      },
      err => {
        this.toastr.error("Error Adding Course");
      }
    )
  }


}
