import { Component, OnInit } from '@angular/core';
import { ProfService } from 'src/app/services/profs-services/prof.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-prof-managements',
  templateUrl: './prof-managements.component.html',
  styleUrls: ['./prof-managements.component.scss', './../user-managements/user-managements.component.scss' ,'../dashboard/dashboard.component.scss', './../why-us/why-us.component.scss']
})
export class ProfManagementsComponent implements OnInit {

  constructor(private profService: ProfService, private toastr: ToastrService) { }
  profs = [];
  ngOnInit(): void {
    this.getAllProfs();
  }
  getAllProfs() {
    this.profService.allProfs().subscribe(
      res => {
        this.profs = res;
        console.log(this.profs);
      },

    )
  }

  deleteProf(prof, index) {
    console.log("deleting prof " + index)
    //let index = this.users.indexOf(prof);
    this.profs.splice(index, 1);
    this.profService.deletProf(prof._id).subscribe(
      res => {
        this.toastr.error('Instructor Deleted Successfully!');
      },
      err => {
        console.log('Instructor not deleted');
      }
    );
  }
}
