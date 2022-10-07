
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = true;

  @Output('isAuthLogin') isAuthLogin = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAuth(event: boolean){
    this.isAuthLogin.emit(event);
    this.router.navigate(["auth"]);
  }

  onSwitchLogin(){
    this.isAuthenticated = !this.isAuthenticated;
  }

}
