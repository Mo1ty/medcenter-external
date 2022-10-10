import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Profile } from "../shared/model/profile.model";
import { ProfileService } from "./profile.service";

@Injectable({providedIn: 'root'})
export class ProfileDataStorageService{

    constructor(
        private httpClient: HttpClient,
        private profileService: ProfileService,
        //private authService: AuthService
    ){}

    getProfileData(userId: number) {
      this.httpClient.get<Profile>("http://localhost:8080/internal/clients/" + userId).subscribe(
        (profile) => {
          this.profileService.setProfileInfo(profile);
        }
      );
    }

    getProfileAddress(addressId: number) {
      this.httpClient.get("http://localhost:8080/internal/addresses/" + addressId).subscribe(
        (address) => console.log(address)
      )
    }
}
