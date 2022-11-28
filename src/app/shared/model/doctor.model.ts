import { ShiftType } from "./shifttype.model";

export class Doctor {

    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public description: string,
      public specialityName: string,
      public shiftType: ShiftType | number
    ){}

}
