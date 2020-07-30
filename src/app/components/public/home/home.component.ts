import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses = ["yassine", "monda", "hsan", "imed", "mounir", "eljeya", "monji"]
  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl("/dashboard")
    }
  }

}
