import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/shared/model/doctor.model';
import { VisitService } from '../visit.service';
import { DoctorListService } from './doctor-list.service';

@Component({
  selector: 'app-doctor-treatment',
  templateUrl: './doctor-treatment.component.html',
  styleUrls: ['./doctor-treatment.component.css']
})
export class DoctorTreatmentComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(
    private doctorListService: DoctorListService,
    private visitService: VisitService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.doctors = this.doctorListService.getDoctors();
    console.log("IN COMPONENT");
    console.log(this.doctors);
  }

  onClick(index: number) {
    this.visitService.updateDoctor(index);
    this.router.navigate(["../", "schedule"], {relativeTo: this.activatedRoute});
    console.log(index);
  }

}
