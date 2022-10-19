import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CommonDataStorageService } from "src/app/shared/common-data-storage.service";
import { CommonService } from "src/app/shared/common.service";
import { Doctor } from "src/app/shared/model/doctor.model";
import { Treatment } from "src/app/shared/model/treatment.model";
import { Visit } from "src/app/shared/model/visit.model";
import { ProfileService, ViewVisit } from "../profile.service";
import { VisitStorageService } from "../visit-storage.service";

@Injectable({providedIn:'root'})
export class PreviousVisitsService {

  visitsList: ViewVisit[] = [];
  visitsListChanged = new Subject<ViewVisit[]>();

  constructor(
    private visitStorage: VisitStorageService
  ){
    this.visitStorage.getClientsVisits(false);
    this.visitStorage.prevVisitViewsChanged.subscribe(
      visitViews => {
        this.visitsList = visitViews;
        this.visitsListChanged.next(this.visitsList);
      }
    );
  }


  getVisitsList(){
    return this.visitsList.slice();
  }

}
