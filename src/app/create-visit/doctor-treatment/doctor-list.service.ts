import { Injectable } from "@angular/core";
import { Doctor } from "src/app/shared/model/doctor.model";

@Injectable({providedIn:'root'})
export class DoctorListService {

  private doctors: Doctor[] = [
    new Doctor(1, "Oleg", "Proch 1", "Lorem"),
    new Doctor(2, "Anna", "Test 2", "Ipsum"),
    new Doctor(3, "Žanna", "Bom 3", "Dolor sit amet")
  ];

  getDoctors(){
    console.log("IN SERVICE");
    console.log(this.doctors);
    return this.doctors.slice();
  }

}
