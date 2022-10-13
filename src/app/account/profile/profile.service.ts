import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Address } from "src/app/shared/model/address.model";
import { CommonDataStorageService } from "../../shared/common-data-storage.service";
import { Profile } from "../../shared/model/profile.model";
import { ProfileDataStorageService } from "./profile-data-storage.service";

@Injectable({providedIn: 'root'})
export class ProfileService {

  // IMPLEMENT FETCHING PROFILE DATA ON INIT

  profileUpdated = new Subject<Profile>();
  addressUpdated = new Subject<Address>();

  profileInfo: Profile = new Profile(0, '', '', '', 0);
  addressInfo: Address = new Address(0, '', '', '', 0);

  constructor(
    private commonStorage: CommonDataStorageService,
    private profileDataStorage: ProfileDataStorageService
  ){
    const userId = 4;
    this.commonStorage.getProfileData(userId).subscribe(
      (profileData: Profile) => {
        console.log(profileData);
        this.profileInfo = profileData;
        this.profileUpdated.next(this.profileInfo);

        this.profileDataStorage.getProfileAddress(profileData.addressId).subscribe(
          (address: Address) => {
            this.addressInfo = address;
            this.addressUpdated.next(this.addressInfo);
          }
        )
      });

  }

  // http://localhost:8080/internal/clients/

  setProfileInfo(profile: Profile){
    this.profileInfo = profile;
    this.profileUpdated.next(this.profileInfo);
  }

  getProfileInfo() {
    return structuredClone(this.profileInfo);
  }

  getAddressInfo() {
    return structuredClone(this.addressInfo);
  }

}
