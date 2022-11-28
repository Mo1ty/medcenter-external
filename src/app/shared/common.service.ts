import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { VisitDataStorageService } from "./data-storage/visit.data-storage.service";
import { Doctor } from "./model/doctor.model";
import { Treatment } from "./model/treatment.model";

@Injectable({providedIn: 'root'})
export class CommonService {

  constructor(private commonStorage: VisitDataStorageService){}

  treatmentChanged = new Subject<Treatment[]>();
  treatmentList: Treatment[] = [];

  doctorsChanged = new Subject<Doctor[]>();
  doctorsList: Doctor[] = [];


  fetchTreatmentsFromServer(){
    this.commonStorage.getTreatments().subscribe(
      (treatments: Treatment[]) => {
        this.treatmentList = treatments;
        this.treatmentChanged.next(this.treatmentList);
      });
  }

  getTreatmentList(){
    return this.treatmentList.slice();
  }

  fetchDoctorsFromServer(){

  }

  getDoctorsList(){
    return this.doctorsList.slice();
  }
}
