import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { VisitService } from '../visit.service';
import { ScheduleListService, Week } from './schedule-list.service';

@Component({
  selector: 'app-schedule-of-doctor',
  templateUrl: './schedule-of-doctor.component.html',
  styleUrls: ['./schedule-of-doctor.component.css']
})
export class ScheduleOfDoctorComponent implements OnInit {

  week: Week;
  firstDay: string;
  lastDay: string;
  dates: Array<Array<Data>>;

  constructor(
    private scheduleListService: ScheduleListService,
    private visitService: VisitService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    if(!this.visitService.getVisitData().doctorAcceptedId){
      this.router.navigate(["../"], {relativeTo: this.activatedRoute});
      return;
    }

    this.week = this.scheduleListService.getThisWeek();
    this.firstDay = this.week.firstDay.toUTCString();
    this.lastDay = this.week.lastDay.toUTCString();

    this.dates = this.scheduleListService.genUTCTimesArrays(
      8,
      16,
      this.week,
      3600
    );
    console.log(this.dates);

  }

}
