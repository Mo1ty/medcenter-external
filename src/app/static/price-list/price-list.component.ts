import { Component, OnInit } from '@angular/core';
import { Treatment } from 'src/app/shared/model/treatment.model';
import { PriceListService } from './price-list.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  priceList: Treatment[];

  constructor(private priceListService: PriceListService) { }

  ngOnInit(): void {
    console.log("hi!");
    this.priceListService.fetchFromServer();
    this.priceListService.pricesChanged.subscribe(
      (treatments) => {
        this.priceList = treatments;
      }
    );
    this.priceList = this.priceListService.getPriceList();
    console.log(this.priceList);
  }

}
