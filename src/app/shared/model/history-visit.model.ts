import { Treatment } from "./treatment.model";
import { Visit } from "./visit.model";

export class HistoryVisit {

  constructor(
    public visitId: number,
    public treatmentDone: Treatment,
    public clientVisitedId: number,
    public doctorAcceptedId: number,
    public datetime: Date
  ) {}

}
