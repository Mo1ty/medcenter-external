import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './static/doctor-list/doctor-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ContactsComponent } from './static/contacts/contacts.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './account/profile/profile.component';
import { PreviousVisitsComponent } from './account/profile/previous-visits/previous-visits.component';
import { PendingVisitsComponent } from './account/profile/pending-visits/pending-visits.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    MainPageComponent,
    HeaderComponent,
    DropdownDirective,
    ContactsComponent,
    AuthComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
