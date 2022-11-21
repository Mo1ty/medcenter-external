import { Contact } from "./contact.model";
import { LoyaltyLevel } from "./loyalty.model";

export class Profile {

  constructor(
    public clientId: number,
    public contact: Contact | number,
    public totalSpent: number,
    public loyaltyLevel: LoyaltyLevel | number
  ){}

}
