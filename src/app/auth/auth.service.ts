import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, throwError } from "rxjs";
import { getCookie } from 'typescript-cookie'
import { UserDetails } from "../shared/model/userdetails.model";

@Injectable({providedIn: 'root'})
export class AuthService {

  user = new BehaviorSubject<UserDetails>(null);
  private tokenExpirationTimer: any;

  constructor(
      private httpClient: HttpClient,
      private router: Router){
  }

  register(email: string, password: string) {
    return this.httpClient.post(
      'http://localhost:8080/internal/auth/register',
      {
        id: 0,
        email: email,
        password: password,
        returnSecureToken: true
        /* Params will vary when switching from firebase-like auth to Spring Security */
      }
    ).pipe(catchError(errorRes => {
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
    return this.httpClient.get('http://localhost:8080/internal/auth/login', { observe: 'response',withCredentials: true });
  }
}
