import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PendingVisitsComponent } from "./pending-visits/pending-visits.component";
import { PreviousVisitsComponent } from "./previous-visits/previous-visits.component";
import { ProfileComponent } from "./profile.component";

const routes: Routes = [
  {
    path: '', component: ProfileComponent,
    children: [
      { path: 'previous', component: PreviousVisitsComponent },
      { path: 'pending', component: PendingVisitsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {

}
