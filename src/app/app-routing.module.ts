import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './static/contacts/contacts.component';
import { DoctorListComponent } from './static/doctor-list/doctor-list.component';
import { PriceListComponent } from './static/price-list/price-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'our-doctors', component: DoctorListComponent },
  { path: 'price-list', component: PriceListComponent },
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'profile',
    loadChildren: () => import('./account/profile/profile.module').then(mod => mod.ProfileModule)
  },
  {
    path: 'create-visit',
    loadChildren: () => import('./create-visit/create-visit.module').then(mod => mod.CreateVisitModule)
  },
  { path: 'auth', component: AuthComponent },

  /*{
    path: 'create-visit',
    children: [
      { path: '', component: CreateVisitComponent },
      { path: 'treatment', component: VisitTreatmentSetComponent },
      { path: 'center', component: VisitCenterSetComponent },
      { path: 'doctor', component: VisitDoctorSetComponent },
      { path: 'schedule', component: VisitTimeSetComponent },
      { path: 'confirmation-page', component: VisitConfirmComponent }
    ]
  }*/

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
