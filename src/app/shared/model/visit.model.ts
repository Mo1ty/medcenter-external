import { ViewVisit } from "src/app/account/profile/profile.service";
import { Doctor } from "./doctor.model";
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

}
