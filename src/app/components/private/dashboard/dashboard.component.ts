import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CourseService } from 'src/app/services/course-services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../public/home/home.component.scss', '../../public/footer/footer.component.scss']
})
export class DashboardComponent implements OnInit {
  courses = []
  constructor(private courseService: CourseService, private activeroute: ActivatedRoute, private router: Router,) { }
  public welcomename: String;
  ngOnInit(): void {
    let token = localStorage.getItem("token");

    if (token) {
      const help = new JwtHelperService();
      const welcomename = help.decodeToken(token).welcomename;
      this.welcomename = welcomename;


    }
    this.getAllCourses();


  }

  getAllCourses() {
    this.courseService.allTrueCourses().subscribe(res => {
      this.courses = res;
      console.log(res)
    })
  }

}