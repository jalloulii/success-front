import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { CourseService } from 'src/app/services/course-services/course.service';

@Component({
  selector: 'app-courses-management',
  templateUrl: './courses-management.component.html',
  styleUrls: ['./courses-management.component.scss', './../dashboard/dashboard.component.scss', './../user-managements/user-managements.component.scss', './../why-us/why-us.component.scss']
})
export class CoursesManagementComponent implements OnInit {

  constructor(private userService: UserServiceService, private courseService: CourseService) { }
  courses = []
  Fcourses = []
  isAdmin: Boolean;
  isUser: Boolean;
  isProf: Boolean;
  ngOnInit(): void {

    this.isAdmin = this.userService.isLoggedAdmin();
    this.isUser = this.userService.isLoggedUser();
    this.isProf = this.userService.isLoggedProf();
    this.getAllTrueCourses();
    this.getAllFalseCourses();

  }

  getAllTrueCourses() {
    this.courseService.allTrueCourses().subscribe(res => {
      this.courses = res;
    })
  }
  getAllFalseCourses() {
    this.courseService.allFalseCourses().subscribe(res => {
      this.Fcourses = res;
    })
  }

  updateCourse(course) {

    this.courseService.updateCourseState(course._id).subscribe(

      res => {

        console.log('course updated');
        this.getAllTrueCourses();
        this.getAllFalseCourses();
      },
      err => {

        console.log('course not updated');
      }
    );
  }

}
