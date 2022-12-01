import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: []
})
export class PersonalDataComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(!this.authService.regData.loginData){
      this.router.navigate(["/auth"]);
    }
  }

  onSubmit(form: NgForm){
    this.authService.regData.id = 0;
    this.authService.regData.firstName = form.value.firstName;
    this.authService.regData.lastName = form.value.lastName;
    this.authService.regData.phoneNumber = form.value.phoneNumber;

    this.router.navigate(["../", "address"], {relativeTo: this.activatedRoute});
  }

}
