import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginData } from 'src/app/shared/model/login.model';
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
  loginData: LoginData;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  onSwitch(){
    this.isLogin = !this.isLogin;
    console.log(this.isLogin);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if(!form.valid) {
      return;
    }

    if(this.isLogin) {

      this.userDetails = new UserDetails();
      this.userDetails.email = form.value.email;
      this.userDetails.password = form.value.password;

      console.log("Login activated");
      this.authService.loginUser(this.userDetails).subscribe(
        (responseData) => {

          window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);

          this.userDetails = <any> responseData.body;
          this.userDetails.isAuthenticated = true;
          window.sessionStorage.setItem("userdetails",JSON.stringify(this.userDetails));

          let xsrf = getCookie('XSRF-TOKEN')!;

          window.sessionStorage.setItem("XSRF-TOKEN", xsrf);
          this.router.navigate(["/main"]);
        }
      );
    }
    else {

      this.loginData = {
        id: 0,
        email: form.value.email,
        password: form.value.password,
        role: "ROLE_CLIENT"
      }

      this.authService.regData.loginData = this.loginData;

      this.router.navigate(["personal"], {relativeTo: this.activatedRoute});
    }
    form.reset();
  }

}
