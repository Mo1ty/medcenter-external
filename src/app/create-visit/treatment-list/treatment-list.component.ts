import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Treatment } from 'src/app/shared/model/treatment.model';
import { VisitService } from '../visit.service';
import { TreatmentListService } from '../../shared/service/treatment-list.service';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: []
})
export class TreatmentListComponent implements OnInit {

  treatments: Treatment[] = [];

  constructor(
    private treatmentListService: TreatmentListService,
    private visitService: VisitService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.treatmentListService.fetchTreatmentsList();
    console.log("Treatments init");
    this.treatmentListService.treatmentsChanged.subscribe(
      (treatments: Treatment[]) => {
        this.treatments = treatments;
        console.log(treatments);
      }
    );
    this.treatments = this.treatmentListService.getTreatmentsList();
  }

  onClick(index: number) {
    this.visitService.updateTreatment(index);
    this.router.navigate(["../", "doctor"], {relativeTo: this.activatedRoute});
    console.log(index);
  }

}
