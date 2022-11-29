import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [


    AuthenticateComponent
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
