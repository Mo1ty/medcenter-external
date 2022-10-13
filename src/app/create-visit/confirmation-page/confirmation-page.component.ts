import { Component, OnInit } from '@angular/core';
import { VisitDataService } from '../visit-data-storage.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  constructor(
    private visitStorage: VisitDataService
  ) {}

  ngOnInit(): void {

  }

  onPostData() {
    this.visitStorage.sendVisit();
  }
}
