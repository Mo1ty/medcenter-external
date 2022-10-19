import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Address } from "src/app/shared/model/address.model";
import { ProfileService } from "./profile.service";

@Injectable({providedIn: 'root'})
export class ProfileDataStorageService{

    constructor(
        private httpClient: HttpClient,
    ){}

    getProfileAddress(addressId: number) {
      return this.httpClient.get("http://localhost:8080/internal/addresses/" + addressId);
    }

    updateAddress(address: Address) {
      this.httpClient.put("http://localhost:8080/internal/addresses", address
        ).subscribe(response => console.log(response));
    }

    deleteVisit(visitId: number) {
      return this.httpClient.delete("http://localhost:8080/internal/visits/" + visitId);
    }

}
