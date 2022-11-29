import { HttpClient } from "@angular/common/http";
import { Treatment } from "../model/treatment.model";

export class TreatmentStorageService {

  constructor(private httpClient: HttpClient){}

  getAllTreatments() {
    return this.httpClient.get<Treatment[]>("http://localhost:8080/internal/treatment/");
  }

}
