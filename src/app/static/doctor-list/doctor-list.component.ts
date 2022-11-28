import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/shared/model/doctor.model';
import { DoctorService } from 'src/app/shared/service/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctorsList: Doctor[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.fetchDoctorsFromServer();
    this.doctorService.doctorsChanged.subscribe(
      (doctors) => {
        this.doctorsList = doctors;
      }
    );
    this.doctorsList = this.doctorService.getDoctorsList();
  }

}
