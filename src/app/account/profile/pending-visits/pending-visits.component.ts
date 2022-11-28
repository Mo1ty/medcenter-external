import { Component, OnInit } from '@angular/core';
import { ViewVisit } from '../../../shared/service/profile.service';
import { PendingVisitsService } from './pending-visits.service';

@Component({
  selector: 'app-pending-visits',
  templateUrl: './pending-visits.component.html',
  styleUrls: []
})
export class PendingVisitsComponent implements OnInit {

  constructor(
    private pendingVisitService: PendingVisitsService
  ) { }

  visits: ViewVisit[] = [];

  ngOnInit(): void {
    this.pendingVisitService.visitsListChanged.subscribe(
      (visitsList: ViewVisit[]) => {
        this.visits = visitsList;
      }
    )
    this.visits = this.pendingVisitService.getVisitsList();
  }

  onDelete(visitId: number): void {
    this.pendingVisitService.deleteVisit(visitId);
  }

}
