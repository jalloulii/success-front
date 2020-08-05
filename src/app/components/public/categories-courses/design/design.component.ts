import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-services/course.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss', './../../../private/dashboard/dashboard.component.scss', './../../../private/why-us/why-us.component.scss', './../../home/home.component.scss']
})
export class DesignComponent implements OnInit {
  designT = [];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.designCategories();
  }
  designCategories() {
    this.courseService.getCoursesWithCategories().subscribe(res => {
      this.designT = res.courses_true_des;
    })
  }
}
