import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Doctor } from "src/app/shared/model/doctor.model";
import { DoctorService } from "src/app/shared/service/doctor.service";
import { VisitService } from "../visit.service";

@Injectable({providedIn:'root'})
export class DoctorListService {

  constructor(
    private doctorService: DoctorService,
    private visitService: VisitService
  ){}

  doctorsChanged = new Subject<Doctor[]>();
  private doctorsList: Doctor[] = [];

  getDoctors(){
    const treatmentId = this.visitService.getVisitData().treatmentDoneId;

    this.doctorService.getDoctorsBySpeciality(treatmentId);
    this.doctorService
  }

  getDoctorsList(){
    return this.doctorsList.slice();
  }

}
