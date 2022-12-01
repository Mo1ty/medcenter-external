import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, throwError } from "rxjs";
import { getCookie } from 'typescript-cookie'
import { FullRegisterData } from "../shared/model/login.model";
import { UserDetails } from "../shared/model/userdetails.model";

@Injectable({providedIn: 'root'})
export class AuthService {

  user = new BehaviorSubject<UserDetails>(null);
  private tokenExpirationTimer: any;

  isAuth = new BehaviorSubject<boolean>(null);

  regData = new FullRegisterData();

  constructor(
      private httpClient: HttpClient,
      private router: Router){
  }

  register(regData: FullRegisterData) {
    return this.httpClient.post(
      '//localhost:8080/auth/register', regData).pipe(catchError(errorRes => {
      let errorMessage = "Unknown error happened!"
      if(!errorRes.error || !errorRes.error.error) {
        return throwError(() => new Error(errorMessage));
      }
      switch(errorRes.error.error.message) {
        case 'PUT_ERROR_MESSAGE_HERE':
          errorMessage = "Error message";
      }
    }
    )
    );
  }

  loginUser(userDetails: UserDetails) {
    console.log(userDetails);
    window.sessionStorage.setItem("userdetails",JSON.stringify(userDetails));
    return this.httpClient.get('//localhost:8080/auth/login', { observe: 'response',withCredentials: true });
  }
}
