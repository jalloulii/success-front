import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-services/course.service';

@Component({
  selector: 'app-photo-graphy',
  templateUrl: './photo-graphy.component.html',
  styleUrls: ['./photo-graphy.component.scss', './../../../private/dashboard/dashboard.component.scss', './../../../private/why-us/why-us.component.scss', './../../home/home.component.scss']
})
export class PhotoGraphyComponent implements OnInit {
  pgT=[];
  constructor(private courseService :CourseService) { }

  ngOnInit(): void {
    this.photoGraphyCourses();
  }
  photoGraphyCourses(){
    this.courseService.getCoursesWithCategories().subscribe(res=>{
      this.pgT=res.courses_true_PG;
    })
  }
}
