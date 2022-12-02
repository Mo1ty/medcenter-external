import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Address } from "src/app/shared/model/address.model";
import { Doctor } from "src/app/shared/model/doctor.model";
import { Treatment } from "src/app/shared/model/treatment.model";
import { UserDetails } from "src/app/shared/model/userdetails.model";
import { Client } from "../model/client.model";
import { ProfileDataStorageService } from "../data-storage/profile.data-storage.service";
import { Contact } from "../model/contact.model";

export interface ViewVisit {
    visitId: number,
    treatmentDoneId: Treatment,
    clientVisitedId: number,
    doctorAcceptedId: Doctor | number,
    datetime: string
};

@Injectable({providedIn: 'root'})
export class ProfileService {

  userDetails: UserDetails = JSON.parse(window.sessionStorage.getItem('userdetails'));

  contactUpdated = new Subject<Contact>();
  contact: Contact = new Contact(0, "", "", "", 0);

  addressUpdated = new Subject<Address>();
  addressInfo: Address = new Address(0, '', '', '', 0);

  clientUpdated = new Subject<Client>();
  clientInfo: Client = new Client(0, 0, 0, 0);

  constructor(
    private profileDataStorage: ProfileDataStorageService
  ){
    this.profileDataStorage.getContactData(this.userDetails.id).subscribe(
      (contactData: Contact) => {
        this.contact = contactData;
        this.contactUpdated.next(this.contact);

        this.profileDataStorage.getContactAddress(contactData.addressId).subscribe(
          (addressData: Address) => {
            this.addressInfo = addressData;
            this.addressUpdated.next(this.addressInfo);
          });
        this.profileDataStorage.getClientViaContact(contactData.id).subscribe(
          (clientData: Client) => {
            this.clientInfo = clientData;
            this.clientUpdated.next(this.clientInfo);
          }
        )
      });

  }

  setContactInfo(contact: Contact){
    this.contact = contact;
    this.contactUpdated.next(this.contact);
  }

  getContactInfo() {
    return structuredClone(this.contact);
  }

  deleteVisit(visitId) {
  }
}
