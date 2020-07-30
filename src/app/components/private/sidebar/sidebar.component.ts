import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', './../dashboard/dashboard.component.scss']
})
export class SidebarComponent implements OnInit {
  isAdmin: Boolean;
  isUser: Boolean;
  isProf: Boolean;
  public welcomename: String;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.isAdmin = this.userService.isLoggedAdmin();
    this.isUser = this.userService.isLoggedUser();
    this.isProf = this.userService.isLoggedProf();

    let token = localStorage.getItem("token");

    if (token) {
      const help = new JwtHelperService();
      const fullname = help.decodeToken(token).welcomename;
      this.welcomename = fullname;


    }


  }

}
