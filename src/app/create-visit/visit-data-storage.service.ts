import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Visit } from "../shared/model/visit.model";
import { VisitService } from "./visit.service";

@Injectable({providedIn: 'root'})
export class VisitDataService {

  constructor(
    private httpClient: HttpClient,
    private visitService: VisitService
  ){}

  sendVisit() {
    const visitData: Visit = this.visitService.getVisitData();
    return this.httpClient.post(
      "http://localhost:8080/internal/visits",
      visitData
      ).subscribe(response => console.log(response));
  }

}
