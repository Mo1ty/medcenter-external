import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserDetails } from "../shared/model/userdetails.model";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  userDetails: UserDetails;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(sessionStorage.getItem('userdetails')){
      this.userDetails = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if(!this.userDetails){
      this.router.navigate(['auth']);
    }
    return this.userDetails?true:false;
  }

}
