import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/user/user.module';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course-clicked',
  templateUrl: './course-clicked.component.html',
  styleUrls: ['./course-clicked.component.scss', './../dashboard/dashboard.component.scss', './../../public/home/home.component.scss']
})
export class CourseClickedComponent implements OnInit {
  coursePrice: Number;
  result_false: Boolean;
  result_true: Boolean;

  public user_reply: FormGroup;

  onecourseT = [];
  title: String;
  description: String;
  lesson_body: String;
  quiz_question: String;
  quiz_choix_1: String;
  quiz_choix_2: String;
  quiz_choix_3: String;
  quiz_user_reply: String;
  quiz_real_reply: String;
  constructor(private courseService: CourseService, private activeroute: ActivatedRoute, private fb: FormBuilder) {
    let send_user_reply = {
      quiz_user_reply: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-b-c]"),
      ]),
    }
    this.user_reply = fb.group(send_user_reply);
  }

  get myquiz_user_reply() { return this.user_reply.get('quiz_user_reply'); }


  ngOnInit(): void {
    let courseID = this.activeroute.snapshot.params.id;
    this.courseService
      .getOneCourse(courseID)
      .subscribe(res => {
        this.title = res.title;
        this.description = res.description;
        this.coursePrice = res.price;
        this.lesson_body = res.lesson_body;
        this.quiz_question = res.quiz_question;
        this.quiz_choix_1 = res.quiz_choix_1;
        this.quiz_choix_2 = res.quiz_choix_2;
        this.quiz_choix_3 = res.quiz_choix_3;
        this.quiz_user_reply = res.quiz_user_reply;
        this.quiz_real_reply = res.quiz_real_reply;
      })
  }
  verifAnswer() {
    let data = this.user_reply.value;
    let answer = data.quiz_user_reply
    this.result_false = false;
    this.result_true = false;
    if (answer != this.quiz_real_reply) {
      this.result_false = true;
      this.result_true = false;
    } else {
      this.result_false = false;
      this.result_true = true;
    }
  }
}