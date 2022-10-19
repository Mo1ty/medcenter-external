import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CommonDataStorageService } from "src/app/shared/common-data-storage.service";
import { ViewVisit, ProfileService } from "../profile.service";
import { VisitStorageService } from "../visit-storage.service";

@Injectable({providedIn: 'root'})
export class PendingVisitsService {


  visitsList: ViewVisit[] = [];
  visitsListChanged = new Subject<ViewVisit[]>();

  constructor(
    private commonStorage: CommonDataStorageService,
    private profileService: ProfileService,
    private visitStorage: VisitStorageService
  ){
    this.visitStorage.getClientsVisits(true);
    this.visitStorage.pendVisitViewsChanged.subscribe(
      visitViews => {
        this.visitsList = visitViews;
        this.visitsListChanged.next(this.visitsList);
      }
    );
  }


  getVisitsList(){
    return this.visitsList.slice();
  }

  toReadable(date: Date){
    return this.visitStorage.toReadableDatetime(date);
  }

  deleteVisit(visitId: number){
    this.commonStorage.deleteVisit(visitId);
    this.visitStorage.getClientsVisits(true);
  }
}
