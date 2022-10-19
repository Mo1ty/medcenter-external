import { ViewVisit } from "src/app/account/profile/profile.service";
import { Doctor } from "./doctor.model";
import { HistoryVisit } from "./history-visit.model";
import { Treatment } from "./treatment.model";

export class Visit {

  constructor(
    public visitId: number,
    public treatmentDoneId: number,
    public clientVisitedId: number,
    public doctorAcceptedId: number,
    public datetime: Date
  ) {


  }

  toViewVisit(this: Visit, treatment: Treatment, doctor?: Doctor): ViewVisit {
    return {
      visitId: this.visitId,
      treatmentDoneId: treatment,
      clientVisitedId: this.clientVisitedId,
      doctorAcceptedId: doctor ? doctor : this.doctorAcceptedId,
      datetime: this.datetime.toLocaleString()
    }

  }


  toHistoryVisit(treatmentList: Treatment[]): HistoryVisit{
    let treatment: Treatment = treatmentList.find(trtmnt => trtmnt.treatmentId === this.treatmentDoneId);
    return new HistoryVisit(
      this.visitId,
      treatment,
      this.clientVisitedId,
      this.doctorAcceptedId,
      this.datetime
    )
  }

}
