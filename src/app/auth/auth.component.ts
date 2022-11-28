import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { getCookie } from 'typescript-cookie';
import { UserDetails } from '../shared/model/userdetails.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: []
})
export class AuthComponent implements OnInit {

  isLogin = false;
  userDetails: UserDetails;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  onSwitch(){
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if(!form.valid) {
      return;
    }
    this.userDetails = new UserDetails();
    this.userDetails.email = form.value.email;
    this.userDetails.password = form.value.password;

    if(this.isLogin) {
      console.log("Login activated");
      this.authService.loginUser(this.userDetails).subscribe(
        (responseData) => {

          window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);

          this.userDetails = <any> responseData.body;
          this.userDetails.isAuthenticated = true;
          window.sessionStorage.setItem("userdetails",JSON.stringify(this.userDetails));

          let xsrf = getCookie('XSRF-TOKEN')!;

          this.consoleLogger("CSRF", xsrf);

          window.sessionStorage.setItem("XSRF-TOKEN", xsrf);
          this.consoleLogger("xsrf-token", window.sessionStorage.getItem('XSRF-TOKEN'));
          this.router.navigate(["/"]);
        }
      );
    }
    else {
      /*this.authService.register(email, password).subscribe(
        {
          next: (responseData) => { console.log(responseData) },
          error: (error) => { console.error(error) }
        }
        );*/
    }
    form.reset();
  }

  consoleLogger(name: string, item: any): void {
    console.log("START : " + name + " : START");
    console.log(item);
    console.log("END : " + name + " : END")
  }

}
