import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

interface AuthResponseData {

}

@Injectable({providedIn: 'root'})
export class AuthService {

  // user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(
      private httpClient: HttpClient,
      private router: Router){
  }

  signup(email: string, password: string) {
    return this.httpClient.post(
      'LINK_HERE',
      {
        email: email,
        password: password,
        returnSecureToken: true
        /* Params will vary when switching from firebase-like auth to Spring Security */
      }
    )
  }
}
