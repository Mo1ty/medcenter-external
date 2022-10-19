import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Visit } from "../shared/model/visit.model";


@Injectable({providedIn: 'root'})
export class VisitService {

  visitChanged = new Subject<Visit>();

  private visitData: Visit = new Visit(0,0,6,0, new Date(0));
  // Put this data into one common file

  updateTreatment(treatmentId: number) {
    this.visitData.treatmentDoneId = treatmentId;
    this.visitChanged.next(structuredClone(this.visitData));
  }

  updateClient(clientId: number) {
    this.visitData.clientVisitedId = clientId;
    this.visitChanged.next(structuredClone(this.visitData));
  }

  updateDoctor(doctorId: number) {
    this.visitData.doctorAcceptedId = doctorId;
    this.visitChanged.next(structuredClone(this.visitData));
  }

  updateDatetime(datetime: number){
    this.visitData.datetime = new Date(datetime);
    this.visitChanged.next(structuredClone(this.visitData));
  }

  getVisitData(){
    return structuredClone(this.visitData);
  }

}
