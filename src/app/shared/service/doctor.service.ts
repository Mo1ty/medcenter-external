import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { DoctorsDataStorageService } from "../data-storage/doctors.data-storage.service";
import { Doctor } from "../model/doctor.model";
import { Treatment } from "../model/treatment.model";

@Injectable({providedIn: 'root'})
export class DoctorService {

  doctorsChanged = new Subject<Doctor[]>();
  doctorsList: Doctor[] = [];

  occupiedTime = new Subject<number[]>();
  occupiedTimesList: number[] = [];

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

  getDoctorsTimetable(doctorId: number) {
    this.doctorStorage.getDoctorsTimetable(doctorId).subscribe(
      (occupied: number[]) => {
        this.occupiedTimesList = occupied;
        this.occupiedTime.next(this.occupiedTimesList);
      }
    )
  }

  getDoctorsBySpeciality(treatmentId: number) {
    this.doctorStorage.getDoctorsBySpeciality(treatmentId).subscribe(
      (docs: Doctor[]) => {
        this.doctorsList = docs;
        this.doctorsChanged.next(this.doctorsList);
      }
    )
  }
}
