import { Component, OnInit } from '@angular/core';
import { ScheduleListService } from './schedule-list.service';

@Component({
  selector: 'app-schedule-of-doctor',
  templateUrl: './schedule-of-doctor.component.html',
  styleUrls: ['./schedule-of-doctor.component.css']
})
export class ScheduleOfDoctorComponent implements OnInit {

  firstDay: string;
  lastDay: string;

  constructor(private scheduleListService: ScheduleListService) { }

  ngOnInit(): void {
    this.firstDay = this.scheduleListService.firstWeekDay.toUTCString();
    this.lastDay = this.scheduleListService.lastWeekDay.toUTCString();
    console.log(this.scheduleListService.today);
  }

}
