import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CourseService } from 'src/app/services/course-services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../why-us/why-us.component.scss','./../user-managements/user-managements.component.scss' ,'../../public/home/home.component.scss', '../../public/footer/footer.component.scss']
})
export class DashboardComponent implements OnInit {
  courses = [];
  admin = [];
  solde: Number;
  coursePrice: Number;
  constructor(private courseService: CourseService, private userService: UserServiceService, private activeroute: ActivatedRoute, private router: Router,) { }
  public welcomename: String;
  ngOnInit(): void {
    let token = localStorage.getItem("token");

    if (token) {
      const help = new JwtHelperService();
      const welcomename = help.decodeToken(token).welcomename;
      this.welcomename = welcomename;
      const solde = help.decodeToken(token).solde;
      this.solde = solde;

    }
    this.getAllCourses();

    let courseID = this.activeroute.snapshot.params.id;
    this.courseService
      .getOneCourse(courseID)
      .subscribe(res => {

        this.coursePrice = res.price;

      })
  }

  getAllCourses() {
    this.courseService.allTrueCourses().subscribe(res => {
      this.courses = res;
      console.log(res)
    })
  }
  /*
  payment(id) {
    this.userService.getoneadmin().subscribe(res => {
      this.solde = res.solde;
    })
    this.courseService.getOneCourse(id).subscribe(res => {
      if (res.price == 'free') {
        alert('you got successfully this course')
      } else {
        this.solde = this.solde + res.price;
      }

    })

    // alert(this.solde = this.solde + this.coursePrice);



  }
*/
}