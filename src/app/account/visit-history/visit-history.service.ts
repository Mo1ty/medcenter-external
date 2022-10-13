import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { TreatmentListService } from "src/app/create-visit/treatment-list/treatment-list.service";
import { CommonDataStorageService } from "src/app/shared/common-data-storage.service";
import { HistoryVisit } from "src/app/shared/model/history-visit.model";
import { Treatment } from "src/app/shared/model/treatment.model";
import { Visit } from "src/app/shared/model/visit.model";

@Injectable({providedIn: 'root'})
export class VisitHistoryService {

  clientId = 4; // must be retrieved from storage

  visitsHistoryChanged = new Subject<HistoryVisit[]>();
  private visitsHistory: HistoryVisit[] = [];
  private treatments: Treatment[] = [];

  constructor(
    private commonStorage: CommonDataStorageService,
    private treatmentService: TreatmentListService
  ){

    this.treatmentService.treatmentsChanged.subscribe(
      (treatmentsList: Treatment[]) => {
        this.treatments = treatmentsList;
        this.getVisitsHistory(this.clientId);
      }
    );

  }

  getVisitsHistory(clientId: number) {

    this.commonStorage.getPreviousVisitsByClient(clientId).subscribe(
      (visitsResult: Visit[]) => {
        console.log(visitsResult);
        console.log("OBJECT END");
        this.visitsHistory = visitsResult.map(
          (singleVisit: Visit) => {
            console.log(singleVisit);
            return this.toHistoryVisit(singleVisit, this.treatments)
          }
        );
        this.visitsHistoryChanged.next(this.visitsHistory.slice());
      }
    );
  }

  getVisitsList(){
    return this.visitsHistory.slice();
  }

  toHistoryVisit(visit: Visit, treatmentList: Treatment[]): HistoryVisit{
    console.log("IN FUNC");
    console.log(visit);

    let treatment = treatmentList.find(
      trtmnt => trtmnt.treatmentId == visit.treatmentDoneId
      );

    console.log(treatment);
    return new HistoryVisit(
      visit.visitId,
      treatment,
      visit.clientVisitedId,
      visit.doctorAcceptedId,
      visit.datetime
    )
  }
}
