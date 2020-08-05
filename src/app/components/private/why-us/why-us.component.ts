import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/users-services/user-service.service';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss', './../dashboard/dashboard.component.scss']
})
export class WhyUsComponent implements OnInit {
  profs = [];
  admine = [];
  
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.ourTeam();

  }
  ourTeam() {
    this.userService.teamSite().subscribe(res => {
      this.profs = res.profs;
      this.admine=res.admin;
      console.log(res.profs);
    })
  }
}
