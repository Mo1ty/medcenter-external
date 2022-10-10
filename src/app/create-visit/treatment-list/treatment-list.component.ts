import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Treatment } from 'src/app/shared/model/treatment.model';
import { VisitService } from '../visit.service';
import { TreatmentListService } from './treatment-list.service';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.css']
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
    this.treatmentListService.getTreatments();

    this.treatmentListService.treatmentsChanged.subscribe(
      (treatments) => {
        this.treatments = treatments;
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
