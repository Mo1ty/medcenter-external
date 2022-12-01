import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/shared/model/address.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-address-data',
  templateUrl: './address-data.component.html',
  styleUrls: []
})
export class AddressDataComponent implements OnInit {

  address: Address;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(!this.authService.regData.loginData || !this.authService.regData.firstName
      || !this.authService.regData.lastName || !this.authService.regData.phoneNumber){
      this.router.navigate(["/auth"]);
    }
  }

  onSubmit(form: NgForm){

    this.address = new Address(
      0,
      form.value.city,
      form.value.postalCode,
      form.value.street,
      form.value.houseNumber
    );

    this.authService.regData.address = this.address;

    this.authService.register(this.authService.regData).subscribe(
      (responseData) => {
        console.log(responseData);


      }
    );

    this.router.navigate(["../"], {relativeTo: this.activatedRoute});
  }

}
