import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CommonDataStorageService } from "../shared/common-data-storage.service";
import { Profile } from "../shared/model/profile.model";

@Injectable({providedIn: 'root'})
export class ProfileService {

  // IMPLEMENT FETCHING PROFILE DATA ON INIT

  constructor(private commonStorage: CommonDataStorageService){}

  profileUpdated = new Subject<Profile>();

  profileInfo: Profile;

  // http://localhost:8080/internal/clients/

  getProfileData(userId: number){
    this.commonStorage.getProfileData(userId).subscribe(
      (profileData: Profile) => {
        console.log(profileData);
        this.profileInfo = profileData;
        this.profileUpdated.next(this.profileInfo);
      });
  }

  setProfileInfo(profile: Profile){
    this.profileInfo = profile;
    this.profileUpdated.next(this.profileInfo);
  }

}
