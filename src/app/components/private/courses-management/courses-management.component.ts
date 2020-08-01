import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { CourseService } from 'src/app/services/course-services/course.service';

@Component({
  selector: 'app-courses-management',
  templateUrl: './courses-management.component.html',
  styleUrls: ['./courses-management.component.scss', './../dashboard/dashboard.component.scss']
})
export class CoursesManagementComponent implements OnInit {
  courses = []
  constructor(private userService: UserServiceService, private courseService: CourseService) { }
  isAdmin: Boolean;
  isUser: Boolean;
  isProf: Boolean;
  ngOnInit(): void {
    this.isAdmin = this.userService.isLoggedAdmin();
    this.isUser = this.userService.isLoggedUser();
    this.isProf = this.userService.isLoggedProf();
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.allCourses().subscribe(res => {
      this.courses = res;
    })
  }

  updateCourse(course) {

    this.courseService.updateCourseState(course._id).subscribe(

      res => {
        console.log(res)
        console.log('course updated');
        this.getAllCourses();
      },
      err => {
        console.log(course._id);
        console.log('course not updated');
      }
    );
  }

}
