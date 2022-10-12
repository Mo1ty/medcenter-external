import { HistoryVisit } from "./history-visit.model";
import { Treatment } from "./treatment.model";

export class Visit {

  constructor(
    public visitId: number,
    public treatmentDoneId: number,
    public clientVisitedId: number,
    public doctorAcceptedId: number,
    public datetime: Date
  ) {}

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
