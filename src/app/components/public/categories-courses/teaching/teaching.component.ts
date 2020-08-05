import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-services/course.service';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.scss', './../../../private/dashboard/dashboard.component.scss', './../../../private/why-us/why-us.component.scss', './../../home/home.component.scss']
})
export class TeachingComponent implements OnInit {
  teachingT = [];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.teachingCourses();
  }
  teachingCourses() {
    this.courseService.getCoursesWithCategories().subscribe(res => {
      this.teachingT = res.courses_true_teaching;
    })
  }
}
