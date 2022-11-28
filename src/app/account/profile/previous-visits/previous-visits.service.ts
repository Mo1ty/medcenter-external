import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ViewVisit } from "../../../shared/service/profile.service";
import { VisitService } from "src/app/shared/service/visit.service";

@Injectable({providedIn:'root'})
export class PreviousVisitsService {

  visitsList: ViewVisit[] = [];
  visitsListChanged = new Subject<ViewVisit[]>();

  constructor(
    private visitStorage: VisitService
  ){
    /*this.visitStorage.getPreviousVisits();
    this.visitStorage.prevVisitViewsChanged.subscribe(
      visitViews => {
        this.visitsList = visitViews;
        this.visitsListChanged.next(this.visitsList);
      }
    );*/
  }


  getVisitsList(){
    return this.visitsList.slice();
  }

}
