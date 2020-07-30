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
  /*
    updateUser(user) {
  
      this.userService.updateUser(user._id).subscribe(
        res => {
          console.log('user updated');
          this.getAllUsers();
        },
        err => {
          console.log('user not updated');
        }
      );
    }
    */
}
