import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Address } from "../model/address.model";
import { Contact } from "../model/contact.model";

@Injectable({providedIn: 'root'})
export class ProfileDataStorageService {



  constructor(
    private httpClient: HttpClient
  ){}

  getContactData(userId: number) {
    return this.httpClient.get<Contact>("http://localhost:8080/internal/contact/personal/" + userId);
  }

  getContactAddress(addressId: number) {
    return this.httpClient.get("http://localhost:8080/internal/address/" + addressId);
  }

  updateContactAddress(address: Address) {
    this.httpClient.put("http://localhost:8080/internal/address", address
      ).subscribe(response => console.log(response));
  }

  getClientViaContact(clientId: number) {
    return this.httpClient.get("http://localhost:8080/internal/client/" + clientId);
  }

  getLoyaltyLevel(loyaltyLevelId: number) {
    return this.httpClient.get("http://localhost:8080/internal/loyalty/" + loyaltyLevelId);
  }
}
