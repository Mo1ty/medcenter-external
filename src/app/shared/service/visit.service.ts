import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { VisitDataStorageService } from "../data-storage/visit.data-storage.service";
import { Visit } from "../model/visit.model";

@Injectable({providedIn: 'root'})
export class VisitService {

  previousVisitsUpdated = new Subject<Visit[]>();
  previousVisitsList: Visit[] = [];

  pendingVisitsUpdated = new Subject<Visit[]>();
  pendingVisitsList: Visit[] = [];

  constructor(
    private visitDataStorageService: VisitDataStorageService
  ) {}

  getPreviousVisits(clientId: number) {
    this.visitDataStorageService.getPreviousVisitsByClient(clientId).subscribe(
      result => {
        this.previousVisitsList = result;
        this.previousVisitsUpdated.next(this.previousVisitsList);
      }
    );
  }

  getPendingVisits(clientId: number) {
    this.visitDataStorageService.getPendingVisitsByClient(clientId).subscribe(
      result => {
        this.pendingVisitsList = result;
        this.pendingVisitsUpdated.next(this.previousVisitsList);
      }
    );
  }

  toReadableDatetime(date: Date) {
    const datePipe: DatePipe = new DatePipe('en-US')
    console.log(datePipe.transform(date, 'medium'));
    return datePipe.transform(date, 'medium');
  }
}
