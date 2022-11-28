import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { DoctorsDataStorageService } from "../data-storage/doctors.data-storage.service";
import { Doctor } from "../model/doctor.model";

@Injectable({providedIn: 'root'})
export class DoctorService {

  doctorsChanged = new Subject<Doctor[]>();
  doctorsList: Doctor[] = [];

  constructor(
    private doctorStorage: DoctorsDataStorageService
  ) {}


  fetchDoctorsFromServer(){
    this.doctorStorage.getAllDoctors().subscribe(
      (doctors: Doctor[]) => {
        this.doctorsList = doctors;
        this.doctorsChanged.next(this.doctorsList);
      });
  }

  getDoctorsList(){
    return this.doctorsList.slice();
  }
}
