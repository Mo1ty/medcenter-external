import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Treatment } from "../model/treatment.model";

@Injectable({providedIn: 'root'})
export class TreatmentStorageService {

  constructor(private httpClient: HttpClient){}

  getAllTreatments() {
    return this.httpClient.get<Treatment[]>("http://localhost:8080/treatment/");
  }

}
