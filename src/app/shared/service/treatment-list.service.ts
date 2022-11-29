import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Treatment } from "src/app/shared/model/treatment.model";
import { VisitService } from "../../create-visit/visit.service";

@Injectable({providedIn:'root'})
export class TreatmentListService {

  treatmentsChanged = new Subject<Treatment[]>();
  private treatmentsList: Treatment[] = [];

  constructor(){}

  getTreatmentsList(){
    return this.treatmentsList.slice();
  }

}
