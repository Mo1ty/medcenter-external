import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Treatment } from "./model/treatment.model";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { PriceListService } from "../static/price-list/price-list.service";

@Injectable({providedIn: 'root'})
export class CommonDataStorageService {


  constructor(
    private httpClient: HttpClient){}

  getTreatments(){
    return this.httpClient.get<Treatment[]>("http://localhost:8080/internal/treatment");
  }

}
