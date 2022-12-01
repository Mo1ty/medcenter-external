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
      "//localhost:8080/visits",
      visitData, {withCredentials: true},
      ).subscribe(response => console.log(response));
  }

}
