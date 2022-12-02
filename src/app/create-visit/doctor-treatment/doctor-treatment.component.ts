import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/shared/model/doctor.model';
import { DoctorService } from 'src/app/shared/service/doctor.service';
import { VisitService } from '../visit.service';
import { DoctorListService } from './doctor-list.service';

@Component({
  selector: 'app-doctor-treatment',
  templateUrl: './doctor-treatment.component.html',
  styleUrls: []
})
export class DoctorTreatmentComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(
    private doctorService: DoctorService,
    private visitService: VisitService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(!this.visitService.getVisitData().treatmentDoneId){
      this.router.navigate(["../"], {relativeTo: this.activatedRoute});
      return;
    }
    this.doctorService.fetchDoctorsBySpeciality(this.visitService.getVisitData().treatmentDoneId);
    this.doctorService.docVisitChanged.subscribe(
      (doctorsList) => {
        this.doctors = doctorsList
      }
    );

    this.doctors = this.doctorService.getTreatmentDocs();
  }

  onClick(index: number) {
    this.visitService.updateDoctor(index);
    this.router.navigate(["../", "schedule"], {relativeTo: this.activatedRoute});
  }

}
