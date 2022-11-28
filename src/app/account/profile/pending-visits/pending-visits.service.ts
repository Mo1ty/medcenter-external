import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ViewVisit } from "../../../shared/service/profile.service";
import { VisitService } from "src/app/shared/service/visit.service";

@Injectable({providedIn: 'root'})
export class PendingVisitsService {

  visitsList: ViewVisit[] = [];
  visitsListChanged = new Subject<ViewVisit[]>();

  constructor(
    private visitService: VisitService
  ){
    /*this.visitService.getPendingVisits();
    this.visitService.pendVisitViewsChanged.subscribe(
      visitViews => {
        this.visitsList = visitViews;
        this.visitsListChanged.next(this.visitsList);
      }
    );*/
  }

  getVisitsList(){
    return this.visitsList.slice();
  }

  toReadable(date: Date){
    return this.visitService.toReadableDatetime(date);
  }

  deleteVisit(visitId: number){
  }
}
