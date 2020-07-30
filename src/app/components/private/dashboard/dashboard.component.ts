import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../public/home/home.component.scss', '../../public/footer/footer.component.scss']
})
export class DashboardComponent implements OnInit {
  courses = ["yassine", "monda", "hsan", "imed", "mounir", "eljeya", "monji"]
  constructor() { }
  public welcomename: String;
  ngOnInit(): void {
    let token = localStorage.getItem("token");

    if (token) {
      const help = new JwtHelperService();
      const welcomename = help.decodeToken(token).welcomename;
      this.welcomename = welcomename;


    }

  }

}
