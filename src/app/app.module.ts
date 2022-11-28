import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './static/doctor-list/doctor-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/directive/dropdown.directive';
import { ContactsComponent } from './static/contacts/contacts.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './account/profile/profile.component';
import { XhrInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    MainPageComponent,
    HeaderComponent,
    DropdownDirective,
    ContactsComponent,
    AuthComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
