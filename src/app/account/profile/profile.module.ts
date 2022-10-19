import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PendingVisitsComponent } from "./pending-visits/pending-visits.component";
import { PreviousVisitsComponent } from "./previous-visits/previous-visits.component";
import { ProfileRoutingModule } from "./profile-routing.module";

@NgModule({
  declarations: [
    PendingVisitsComponent,
    PreviousVisitsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule {

}
