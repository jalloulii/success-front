import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-management',
  templateUrl: './courses-management.component.html',
  styleUrls: ['./courses-management.component.scss', './../dashboard/dashboard.component.scss']
})
export class CoursesManagementComponent implements OnInit {
  courses = ["yassine", "monda", "hsan", "imed", "mounir", "eljeya", "monji"]
  constructor() { }

  ngOnInit(): void {
  }

}
