import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDoctorClick() {
    this.router.navigateByUrl('/our-doctors');
  }

  onVisitClick() {
    this.router.navigateByUrl('/create-visit');
  }

  onPriceListClick() {
    this.router.navigateByUrl('/price-list');
  }
}
