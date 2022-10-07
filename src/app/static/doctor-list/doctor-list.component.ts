import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/shared/model/doctor.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctorList: Doctor[] = [
    {
      id: 32,
      firstName: "Daniel",
      lastName: "Novák",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 33,
      firstName: "Michael",
      lastName: "Smith",
      description: "Donec sem massa, viverra ac varius nec, vulputate non metus. Curabitur vitae convallis nunc."
    },
    {
      id: 47,
      firstName: "Alžběta",
      lastName: "Šindlerova",
      description: "Praesent egestas risus a massa accumsan, et gravida dui semper. Vivamus et justo quam."
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
