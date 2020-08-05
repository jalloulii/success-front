import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-user-managements',
  templateUrl: './user-managements.component.html',
  styleUrls: ['./user-managements.component.scss', '../dashboard/dashboard.component.scss', './../why-us/why-us.component.scss']
})
export class UserManagementsComponent implements OnInit {
  users = [];
  id: String;
  constructor(private userService: UserServiceService, private toastr: ToastrService) { }

  showSpinner: Boolean = true;

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    const help = new JwtHelperService();
    let id = help.decodeToken(token).id;
    this.id = id
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.allUsers().subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      },

    )
  }
  deletUser(user, index) {
    this.users.splice(index, 1);
    this.userService.deletUser(user._id).subscribe(
      res => {
        this.toastr.error(res.message);
      },
      err => {
        console.log('user not deleted');
      }
    );
  }

}
