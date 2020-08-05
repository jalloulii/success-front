import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-services/course.service';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.scss', './../../../private/dashboard/dashboard.component.scss', './../../../private/why-us/why-us.component.scss', './../../home/home.component.scss']
})
export class GamingComponent implements OnInit {
  gamingt=[];
  constructor(private CourseService : CourseService) { }

  ngOnInit(): void {
    this.gaming();
  }
  gaming(){
    this.CourseService.getCoursesWithCategories().subscribe(res=>{
      this.gamingt = res.courses_true_gaming;
    })
  }
}
