import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { UserDetails } from "../shared/model/userdetails.model";
import { Visit } from "../shared/model/visit.model";
import { ProfileService } from "../shared/service/profile.service";


@Injectable({providedIn: 'root'})
export class VisitService {

  visitChanged = new Subject<Visit>();
  userDetails: UserDetails;


  private visitData = new Visit(0, 0, 0, 0, 0, new Date(0), "No further comments provided");
  // Put this data into one common file

  constructor(private profileService: ProfileService){
    this.profileService.clientUpdated.subscribe(
      resp => {
        this.visitData.clientVisitedId = resp.id;
      }
    )
  }

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
