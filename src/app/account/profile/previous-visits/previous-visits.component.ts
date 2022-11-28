import { Component, OnInit } from '@angular/core';
import { ProfileService, ViewVisit } from '../../../shared/service/profile.service';
import { PreviousVisitsService } from './previous-visits.service';

@Component({
  selector: 'app-previous-visits',
  templateUrl: './previous-visits.component.html',
  styleUrls: []
})
export class PreviousVisitsComponent implements OnInit {

  constructor(
    private previousVisitsService: PreviousVisitsService
  ) { }

  visits: ViewVisit[] = [];

  ngOnInit(): void {
    this.previousVisitsService.visitsListChanged.subscribe(
      (visitsList: ViewVisit[]) => {
        this.visits = visitsList;
      }
    )
    this.visits = this.previousVisitsService.getVisitsList();
  }

}
