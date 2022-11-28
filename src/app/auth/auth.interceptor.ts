import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { UserDetails } from "../shared/model/userdetails.model";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  userDetails: UserDetails = new UserDetails();

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let httpHeaders = new HttpHeaders();

    if(sessionStorage.getItem('userdetails')){
      this.userDetails = JSON.parse(sessionStorage.getItem('userdetails'))
    }

    if(this.userDetails && this.userDetails.email && this.userDetails.password) {
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.userDetails.email + ':' + this.userDetails.password));
    }
    else{
      let authorization = sessionStorage.getItem('Authorization');
      if(authorization) {
        httpHeaders = httpHeaders.append('Authorization', authorization);
      }
    }
    let xsrf = sessionStorage.getItem('XSRF-TOKEN');
    if(xsrf){
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);
    }
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });
    return next.handle(xhr).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['/']);
        }
      }));
  }

  consoleLogger(name: string, item: any): void {
    console.log("START : " + name + " : START");
    console.log(item);
    console.log("END : " + name + " : END")
  }

}
