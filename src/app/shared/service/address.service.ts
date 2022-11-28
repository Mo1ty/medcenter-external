import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ProfileDataStorageService } from "../data-storage/profile.data-storage.service";
import { Address } from "../model/address.model";
import { UserDetails } from "../model/userdetails.model";

@Injectable({providedIn: 'root'})
export class AddressService {

  userDetails: UserDetails = JSON.parse(window.sessionStorage.getItem('userdetails'));

  addressUpdated = new Subject<Address>();
  addressInfo: Address = new Address(0, '', '', '', 0);
}
