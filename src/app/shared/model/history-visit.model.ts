import { Treatment } from "./treatment.model";

export class HistoryVisit {

  constructor(
    public visitId: number,
    public treatmentDone: Treatment,
    public clientVisitedId: number,
    public doctorAcceptedId: number,
    public datetime: Date
  ) {}

}
