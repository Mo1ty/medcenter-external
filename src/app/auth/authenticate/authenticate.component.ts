import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetails } from 'src/app/shared/model/userdetails.model';
import { getCookie } from 'typescript-cookie';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: []
})
export class AuthenticateComponent implements OnInit {

  isLogin = false;
  userDetails: UserDetails;

  constructor(
    private router: Router,
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

          window.sessionStorage.setItem("XSRF-TOKEN", xsrf);
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

}
