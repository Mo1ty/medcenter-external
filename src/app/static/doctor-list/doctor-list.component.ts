import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { Doctor } from 'src/app/shared/model/doctor.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctorsList: Doctor[];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.fetchDoctorsFromServer();
    this.commonService.doctorsChanged.subscribe(
      (doctors) => {
        this.doctorsList = doctors;
      }
    );
    this.doctorsList = this.commonService.getDoctorsList();
  }

}
