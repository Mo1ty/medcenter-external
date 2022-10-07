import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Profile } from "./profile.model";
import { ProfileService } from "./profile.service";

@Injectable({providedIn: 'root'})
export class ProfileDataStorageService{

    constructor(
        private httpClient: HttpClient,
        private profileService: ProfileService,
        private authService: AuthService
    ){}

    getProfileData(userId: number) {
      return this.httpClient.get<Profile>("http://localhost:8080/internal/clients/" + userId);
    }
}
