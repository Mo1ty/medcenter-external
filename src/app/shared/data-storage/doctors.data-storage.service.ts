import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctor } from "../model/doctor.model";

@Injectable({providedIn: 'root'})
export class DoctorsDataStorageService {

  constructor(
    private httpClient: HttpClient
  ){}

  getDoctorsBySpeciality(specialityId: number){
    return this.httpClient.get<Doctor[]>
      ("http://localhost:8080/doctor/speciality/" + specialityId);
  }

  getAllDoctors(){
    return this.httpClient.get<Doctor[]>
    ("http://localhost:8080/doctor");
  }

  getDoctorsTimetable(doctorId: number){
    return this.httpClient.get<number[]>
      ("http://localhost:8080/visits/timetable/" + doctorId);
  }

}
