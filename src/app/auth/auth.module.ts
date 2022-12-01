import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { AddressDataComponent } from './address-data/address-data.component';

@NgModule({
  declarations: [
    AuthenticateComponent,
    PersonalDataComponent,
    AddressDataComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule {

}
