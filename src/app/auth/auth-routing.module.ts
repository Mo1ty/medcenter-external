import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddressDataComponent } from "./address-data/address-data.component";
import { AuthComponent } from "./auth.component";
import { AuthenticateComponent } from "./authenticate/authenticate.component";
import { PersonalDataComponent } from "./personal-data/personal-data.component";

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      // { path: '', redirectTo: 'authenticate', pathMatch: 'prefix'},
      { path: '', component: AuthenticateComponent },
      { path: 'personal', component: PersonalDataComponent },
      { path: 'address', component: AddressDataComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
