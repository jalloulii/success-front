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
  url = "assets/imgs/avatar-default-profile.png";
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {

    let token = localStorage.getItem("token");
    const help = new JwtHelperService();
    const id = help.decodeToken(token).id;

    this.isAdmin = this.userService.isLoggedAdmin();
    this.isUser = this.userService.isLoggedUser();
    this.isProf = this.userService.isLoggedProf();

    this.userService
      .getOneUser(id)
      .subscribe(res => {
        let user = res;
        console.log(user);
        this.url = "http://localhost:3000/" + user.image;

      }, err => {
        console.log(err);
      })


    if (token) {

      const fullname = help.decodeToken(token).welcomename;
      this.welcomename = fullname;


    }


  }

}
