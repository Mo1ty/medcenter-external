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

    getProfileAddress(addressId: number) {
      this.httpClient.get("http://localhost:8080/internal/addresses/" + addressId).subscribe(
        (address) => console.log(address)
      )
    }
}