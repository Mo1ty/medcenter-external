import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateVisitComponent } from "./create-visit.component";
import { DoctorTreatmentComponent } from "./doctor-treatment/doctor-treatment.component";
import { ScheduleOfDoctorComponent } from "./schedule-of-doctor/schedule-of-doctor.component";
import { TreatmentListComponent } from "./treatment-list/treatment-list.component";

const routes: Routes = [
  {
    path: '', component: CreateVisitComponent,
    children: [
      { path: '', redirectTo: 'treatment', pathMatch: 'prefix'},
      { path: 'treatment', component: TreatmentListComponent },
      /*{ path: 'center', component: VisitCenterSetComponent },*/
      { path: 'doctor', component: DoctorTreatmentComponent },
      { path: 'schedule', component: ScheduleOfDoctorComponent },
      /*{ path: 'confirmation-page', component: VisitConfirmComponent }*/
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateVisitRoutingModule {

}
