import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './static/contacts/contacts.component';
import { DoctorListComponent } from './static/doctor-list/doctor-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'our-doctors', component: DoctorListComponent },
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'profile',
    loadChildren: () => import('./account/profile/profile.module').then(mod => mod.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'create-visit',
    loadChildren: () => import('./create-visit/create-visit.module').then(mod => mod.CreateVisitModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
