import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Treatment } from "src/app/shared/model/treatment.model";
import { VisitService } from "../../create-visit/visit.service";
import { TreatmentStorageService } from "../data-storage/treatment.data-storage.service";

@Injectable({providedIn:'root'})
export class TreatmentListService {

  treatmentsChanged = new Subject<Treatment[]>();
  treatmentsList: Treatment[] = [];

  constructor(
    private treatmentStorage: TreatmentStorageService
  ){}

  fetchTreatmentsList(){
    this.treatmentStorage.getAllTreatments().subscribe(
      (result: Treatment[]) => {
        this.treatmentsList = result;
        this.treatmentsChanged.next(this.treatmentsList);
      }
    )
  }

  getTreatmentsList(){
    return this.treatmentsList.slice();
  }

}
