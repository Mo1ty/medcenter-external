import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitDataService } from '../visit-data-storage.service';
import { VisitService } from '../visit.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  constructor(
    private visitStorage: VisitDataService,
    private visitService: VisitService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if(!this.visitService.getVisitData().datetime.getTime()){
      this.router.navigate(["../"], {relativeTo: this.activatedRoute});
      return;
    }
  }

  onPostData() {
    this.visitStorage.sendVisit();
    this.router.navigate(["/"]);
  }
}
