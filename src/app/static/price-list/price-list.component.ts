import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { Treatment } from 'src/app/shared/model/treatment.model';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  priceList: Treatment[];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.fetchTreatmentsFromServer();
    this.commonService.treatmentChanged.subscribe(
      (treatments) => {
        this.priceList = treatments;
      }
    );
    this.priceList = this.commonService.getTreatmentList();
  }

}
