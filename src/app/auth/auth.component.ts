import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // @Input("isAuthLogin") isLogin;
  // Find the way to turn it on while pressing different buttons (mb function in header component)

  isLogin = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /*this.activatedRoute.queryParams.subscribe(
      event => {
        console.log(event);
        console.log(event.isLogin);
        this.isLogin = event.isLogin;
        console.log(this.isLogin);
      }
    )*/
  }

  onSwitch(){
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

}
