import { Component, OnInit } from '@angular/core';
import { HistoryVisit } from 'src/app/shared/model/history-visit.model';
import { Treatment } from 'src/app/shared/model/treatment.model';
import { VisitHistoryService } from './visit-history.service';

@Component({
  selector: 'app-visit-history',
  templateUrl: './visit-history.component.html',
  styleUrls: ['./visit-history.component.css']
})
export class VisitHistoryComponent implements OnInit {

  clientId = 4;
  historyVisits: HistoryVisit[] = [];
  treatments: Treatment[] = [];

  constructor(
    private visitHistoryService: VisitHistoryService,
  ) { }

  ngOnInit(): void {
    this.visitHistoryService.getVisitsHistory(this.clientId);

    this.visitHistoryService.visitsHistoryChanged.subscribe(
      (historyVisits: HistoryVisit[]) => this.historyVisits = historyVisits
    );
    this.historyVisits = this.visitHistoryService.getVisitsList();
  }

}
