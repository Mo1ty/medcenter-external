import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CommonDataStorageService } from "src/app/shared/common-data-storage.service";
import { Doctor } from "src/app/shared/model/doctor.model";
import { VisitService } from "../visit.service";

@Injectable({providedIn:'root'})
export class DoctorListService {

  constructor(
    private commonStorage: CommonDataStorageService,
    private visitService: VisitService
  ){}

  doctorsChanged = new Subject<Doctor[]>();
  private doctorsList: Doctor[] = [];

  getDoctors(){
    const treatmentId = this.visitService.getVisitData().treatmentDoneId;

    this.commonStorage.getDoctorsByTreatment(treatmentId).subscribe(
      (doctors) =>
      {
        this.doctorsList = doctors;
        this.doctorsChanged.next(this.doctorsList);
      }
    );
  }

  getDoctorsList(){
    return this.doctorsList.slice();
  }

}
