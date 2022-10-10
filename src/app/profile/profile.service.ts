import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Profile } from "../shared/model/profile.model";

@Injectable({providedIn: 'root'})
export class ProfileService {

  // IMPLEMENT FETCHING PROFILE DATA ON INIT

  constructor(){}

  profileUpdated = new Subject<Profile>();

  profileInfo: Profile = new Profile(0, "", "", "", 0);

  userId: number = 4;

  // http://localhost:8080/internal/clients/

  getProfileData(){
    return structuredClone(this.profileInfo);
  }

  setProfileInfo(profile: Profile){
    this.profileInfo = profile;
    this.profileUpdated.next(this.profileInfo);
  }

}
