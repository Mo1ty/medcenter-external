
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ProfileDataStorageService } from '../shared/data-storage/profile.data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;

  @Output('isAuthLogin') isAuthLogin = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private profileDataStorage: ProfileDataStorageService,
    private authService: AuthService
  ) {

   }

  ngOnInit(): void {
  }

  onAuth(event: boolean){
    this.isAuthLogin.emit(event);
    this.router.navigate(["auth"]);
  }

  onSwitchLogin(){
    this.isAuthenticated = !this.isAuthenticated;
  }

  onGetProfile(){
    this.router.navigate(['profile']);
  }
}
