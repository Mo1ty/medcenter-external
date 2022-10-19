import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CommonDataStorageService } from "src/app/shared/common-data-storage.service";
import { Doctor } from "src/app/shared/model/doctor.model";
import { Treatment } from "src/app/shared/model/treatment.model";
import { Visit } from "src/app/shared/model/visit.model";
import { ProfileService, ViewVisit } from "./profile.service";

@Injectable({providedIn:'root'})
export class VisitStorageService {

  treatmentsList: Treatment[] = [];
  doctorsList: Doctor[] = [];

  prevVisitViewsChanged = new Subject<ViewVisit[]>();
  prevVisitViews: ViewVisit[] = [];

  pendVisitViewsChanged = new Subject<ViewVisit[]>();
  pendVisitViews: ViewVisit[] = [];



  constructor(
    private commonStorage: CommonDataStorageService,
    private profileService: ProfileService,
  ){}

  getClientsVisits(isPending: boolean) {
    this.commonStorage.getTreatments().subscribe(

      (treatments: Treatment[]) => {

        this.treatmentsList = treatments;
        if(isPending){
          this.commonStorage.getPendingVisitsByClient(this.profileService.userId).subscribe(
            (visitsResult: Visit[]) => {
              this.pendVisitViews = this.toViewVisit(visitsResult);
              this.pendVisitViewsChanged.next(this.pendVisitViews);
            }
          )
        }
        else{
          this.commonStorage.getPreviousVisitsByClient(this.profileService.userId).subscribe(
            (visitsResult: Visit[]) => {
              this.prevVisitViews = this.toViewVisit(visitsResult);
              this.prevVisitViewsChanged.next(this.prevVisitViews);
            }
          )
        }

      }

    )
  }

  toViewVisit(visitsList: Visit[]) {
    return visitsList.map(
      (oneVisit: Visit) => {

        const theVisit = new Visit(oneVisit.visitId, oneVisit.treatmentDoneId, oneVisit.clientVisitedId,
            oneVisit.doctorAcceptedId, oneVisit.datetime);

        return theVisit.toViewVisit(
          this.treatmentsList.find(
            trtmnt => trtmnt.treatmentId === theVisit.treatmentDoneId
          ),
        )
      }
    )
  }

  toReadableDatetime(date: Date) {
    const datePipe: DatePipe = new DatePipe('en-US')
    console.log(datePipe.transform(date, 'medium'));
    return datePipe.transform(date, 'medium');
  }


}
