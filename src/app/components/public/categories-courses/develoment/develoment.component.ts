import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-services/course.service';

@Component({
  selector: 'app-develoment',
  templateUrl: './develoment.component.html',
  styleUrls: ['./develoment.component.scss', './../../../private/dashboard/dashboard.component.scss', './../../../private/why-us/why-us.component.scss', './../../home/home.component.scss']
})
export class DevelomentComponent implements OnInit {
  devT = []
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.devCategories();
  }
  devCategories() {
    this.courseService.getCoursesWithCategories().subscribe(res => {
      this.devT = res.courses_true_dev;
    })
  }
}
