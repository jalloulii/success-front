import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-managements',
  templateUrl: './user-managements.component.html',
  styleUrls: ['./user-managements.component.scss', '../dashboard/dashboard.component.scss']
})
export class UserManagementsComponent implements OnInit {
  users = [];
  constructor(private userService: UserServiceService, private toastr: ToastrService) { }

  showSpinner: Boolean = true;

  ngOnInit(): void {
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
