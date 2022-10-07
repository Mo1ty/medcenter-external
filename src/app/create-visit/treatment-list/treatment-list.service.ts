import { Injectable } from "@angular/core";
import { Treatment } from "src/app/shared/model/treatment.model";

@Injectable({providedIn:'root'})
export class TreatmentListService {

  private treatments: Treatment[] = [
    new Treatment(1, "test 1", 200),
    new Treatment(2, "test 2", 400),
    new Treatment(3, "test 3", 600)
  ];

  getTreatments(){
    console.log("IN SERVICE");
    console.log(this.treatments);
    return this.treatments.slice();
  }

}
