import { Injectable } from "@angular/core";
import { ProfileDataStorageService } from "./profile-data-storage.service";
import { Profile } from "./profile.model";

@Injectable({providedIn: 'root'})
export class ProfileService {

  constructor(private dataStorage: ProfileDataStorageService){}

  profileInfo: Profile;

  userId: number = 4;

  // http://localhost:8080/internal/clients/

  getProfileData(){

  }

}
