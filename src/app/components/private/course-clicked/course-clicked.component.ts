import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/user/user.module';

@Component({
  selector: 'app-course-clicked',
  templateUrl: './course-clicked.component.html',
  styleUrls: ['./course-clicked.component.scss', './../dashboard/dashboard.component.scss', './../../public/home/home.component.scss']
})
export class CourseClickedComponent implements OnInit {
  onecourseT = [];
  title: String;
  description: String;
  lesson_body: String;
  constructor(private courseService: CourseService, private activeroute: ActivatedRoute,) { }

  ngOnInit(): void {
    let courseID = this.activeroute.snapshot.params.id;
    this.courseService
      .getOneCourse(courseID)
      .subscribe(res => {
        this.title = res.title;
        this.description = res.description;
        this.lesson_body = res.lesson_body;
      })
  }

}
