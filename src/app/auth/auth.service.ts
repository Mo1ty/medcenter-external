import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, throwError } from "rxjs";
import { getCookie } from 'typescript-cookie'
import { User } from "./user.model";

@Injectable({providedIn: 'root'})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(
      private httpClient: HttpClient,
      private router: Router){
  }

  signup(email: string, password: string) {
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
}
