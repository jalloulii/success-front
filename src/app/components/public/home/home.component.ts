import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { CourseService } from 'src/app/services/course-services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses = []
  constructor(private userService: UserServiceService, private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl("/dashboard")
    }
    this.getAllCourses();
  }
  getAllCourses() {
    this.courseService.allTrueCourses().subscribe(res => {
      this.courses = res;
    })
  }
}
