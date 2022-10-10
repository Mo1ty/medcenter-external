import { Injectable, OnInit } from "@angular/core";
import { exhaustMap, Subject } from "rxjs";
import { CommonDataStorageService } from "src/app/shared/common-data-storage.service";
import { Treatment } from "src/app/shared/model/treatment.model";

@Injectable({providedIn: 'root'})
export class PriceListService implements OnInit {

  constructor(private commonStorage: CommonDataStorageService){}

  pricesChanged = new Subject<Treatment[]>();

  priceList: Treatment[] = [];

  ngOnInit(): void {
    console.log("Hello");
  }

  fetchFromServer(){
    this.commonStorage.getTreatments().subscribe(
      (treatments: Treatment[]) => {
        console.log(treatments);
        this.priceList = treatments;
        this.pricesChanged.next(this.priceList);
      });
  }

  setPriceList(treatments: Treatment[]){

    this.priceList = treatments;
    this.pricesChanged.next(this.priceList);
  }

  getPriceList(){
    return this.priceList.slice();
  }
}
