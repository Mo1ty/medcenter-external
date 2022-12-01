import { ViewVisit } from "src/app/shared/service/profile.service";
import { Doctor } from "./doctor.model";
import { Treatment } from "./treatment.model";

export class Visit {

  constructor(
    public visitId: number,
    public treatmentDoneId: number,
    public clientVisitedId: number,
    public doctorAcceptedId: number,
    public price: number = 600,
    public datetime: Date,
    public illnessDescription: string = "Nothing"
  ) {}
}
