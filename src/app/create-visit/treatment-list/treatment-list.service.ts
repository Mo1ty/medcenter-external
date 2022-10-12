import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { CommonDataStorageService } from "src/app/shared/common-data-storage.service";
import { Treatment } from "src/app/shared/model/treatment.model";
import { VisitService } from "../visit.service";

@Injectable({providedIn:'root'})
export class TreatmentListService {

  treatmentsChanged = new Subject<Treatment[]>();
  private treatmentsList: Treatment[] = [];

  constructor(
    private commonStorage: CommonDataStorageService,
    private visitService: VisitService){
      this.commonStorage.getTreatments().subscribe(
        (treatments: Treatment[]) => {
          this.treatmentsList = treatments;
          this.treatmentsChanged.next(this.treatmentsList);
        });
    }

  // 'http://localhost:8080/internal/treatment/3/doctors'

  getTreatmentsByDoc(){
    const docId = this.visitService.getVisitData().doctorAcceptedId;
    console.log(this.visitService.getVisitData());
    console.log(docId);
    this.commonStorage.getTreatmentsByDoctor(docId).subscribe(
      (treatments: Treatment[]) => {
        console.log(treatments);
        this.treatmentsList = treatments;
        this.treatmentsChanged.next(this.treatmentsList);
      });

  }

  getTreatmentsList(){
    return this.treatmentsList.slice();
  }

}
