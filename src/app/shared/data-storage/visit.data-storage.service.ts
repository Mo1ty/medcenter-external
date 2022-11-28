import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Address } from "../model/address.model";
import { Doctor } from "../model/doctor.model";
import { Client } from "../model/client.model";
import { Treatment } from "../model/treatment.model";
import { Visit } from "../model/visit.model";
// import { exhaustMap, map, take, tap } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class VisitDataStorageService {

  constructor(
    private httpClient: HttpClient
  ){}

  getTreatments(){
    return this.httpClient.get<Treatment[]>("http://localhost:8080/internal/treatment");
  }

  getTreatmentsByDoctor(doctorId: number){
    return this.httpClient.get<Treatment[]>
      ("http://localhost:8080/internal/doctor/" + doctorId + "/treatments");
  }

  getPreviousVisitsByClient(clientId: number){
    return this.httpClient.get<Visit[]>
      ("http://localhost:8080/internal/visits/history/" + clientId);
  }

  getPendingVisitsByClient(clientId: number){
    return this.httpClient.get<Visit[]>
      ("http://localhost:8080/internal/visits/pending/" + clientId);
  }

  deleteVisit(visitId: number) {
    return this.httpClient.delete("http://localhost:8080/internal/visits/" + visitId);
  }
}
