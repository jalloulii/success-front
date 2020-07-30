import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Boolean;
  public fullname: String;
  public email: String;
  constructor(private userService: UserServiceService, private router: Router, private toastr: ToastrService) {

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
      console.log(email);
    }



  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
    this.toastr.error('Logged Out successfully!');
  }

}
