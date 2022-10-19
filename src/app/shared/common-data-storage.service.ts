import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Address } from "./model/address.model";
import { Doctor } from "./model/doctor.model";
import { Profile } from "./model/profile.model";
import { Treatment } from "./model/treatment.model";
import { Visit } from "./model/visit.model";
// import { exhaustMap, map, take, tap } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class CommonDataStorageService {

  constructor(
    private httpClient: HttpClient
  ){}

  getProfileData(userId: number) {
    return this.httpClient.get<Profile>("http://localhost:8080/internal/clients/" + userId);
  }

  getTreatments(){
    return this.httpClient.get<Treatment[]>("http://localhost:8080/internal/treatment");
  }

  getTreatmentsByDoctor(doctorId: number){
    return this.httpClient.get<Treatment[]>
      ("http://localhost:8080/internal/doctors/" + doctorId + "/treatments");
  }

  getDoctorsByTreatment(treatmentId: number){
    return this.httpClient.get<Doctor[]>
      ("http://localhost:8080/internal/treatment/" + treatmentId + "/doctors");
  }

  getPreviousVisitsByClient(clientId: number){
    return this.httpClient.get<Visit[]>
      ("http://localhost:8080/internal/visits/history/" + clientId);
  }

  getPendingVisitsByClient(clientId: number){
    return this.httpClient.get<Visit[]>
      ("http://localhost:8080/internal/visits/pending/" + clientId);
  }

  getOccupiedDatesByDoctor(doctorId: number){
    return this.httpClient.get<number[]>
      ("http://localhost:8080/internal/visits/timetable/" + doctorId);
  }

  getAllDoctors(){
    return this.httpClient.get<Doctor[]>
    ("http://localhost:8080/internal/doctors");
  }
}
