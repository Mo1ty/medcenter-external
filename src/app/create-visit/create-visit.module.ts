import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateVisitComponent } from "./create-visit.component";
import { CreateVisitRoutingModule } from "./create-visit.routing.module";
import { TreatmentListComponent } from './treatment-list/treatment-list.component';
import { DoctorTreatmentComponent } from './doctor-treatment/doctor-treatment.component';
import { ScheduleOfDoctorComponent } from './schedule-of-doctor/schedule-of-doctor.component';

@NgModule({
    declarations: [
      CreateVisitComponent,
      TreatmentListComponent,
      DoctorTreatmentComponent,
      ScheduleOfDoctorComponent
    ],
    imports: [
      RouterModule,
      CommonModule,
      CreateVisitRoutingModule
    ]
})
export class CreateVisitModule {

}
