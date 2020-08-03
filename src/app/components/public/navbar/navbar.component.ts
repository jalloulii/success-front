import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/services/course-services/course.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Boolean;
  isLogedAdmin: Boolean;
  public fullname: String;
  public solde: Number;
  public email: String;
  false_courses: String;
  idU: String;
  courses = []
  courses_false = []
  constructor(private userService: UserServiceService, private courseService: CourseService, private router: Router, private toastr: ToastrService) {

  }


  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();

    let token = localStorage.getItem("token");

    if (token) {
      const help = new JwtHelperService();
      const fullname = help.decodeToken(token).firstname;
      this.fullname = fullname;
      const email = help.decodeToken(token).email;
      this.email = email;
      const solde = help.decodeToken(token).solde;
      const id = help.decodeToken(token).id;
      this.solde = solde;
      this.idU = id;
    }
    this.isLogedAdmin = this.userService.isLoggedAdmin()
    this.getAllCourses();
    this.falseCourses();

    const selectElement = (element) => document.querySelector(element);
    selectElement('.menu-icons').addEventListener('click', () => {
      selectElement('nav').classList.toggle('active');
    });
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
    this.toastr.error('Logged Out successfully!');
  }
  getAllCourses() {
    this.courseService.allCourses().subscribe(res => {
      this.courses = res;
      console.log(res)
    })
  }
  falseCourses() {
    this.courseService.allFalseCourses().subscribe(res => {
      this.courses_false = res;
      this.falseCourses();
    })
  }
  /*
  falseCourses() {
    for (let i = 0; i <= this.courses.length; i++) {
      if (this.courses[i].etat == false) {
        console.log("t3ada")
        this.courses[i] = this.courses_false;
      }
    }

  }
  */
}
