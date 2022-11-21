import { Address } from "./address.model";

export class Contact {

  constructor(
    public contactId: number,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public address: Address | number
  ){}

}
