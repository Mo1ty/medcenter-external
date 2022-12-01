import { Speciality } from "./speciality.model";

export class Treatment {

  constructor(
    public treatmentId: number,
    public speciality: Speciality | number,
    public name: string,
    public regularPrice: number
  ){}

}
