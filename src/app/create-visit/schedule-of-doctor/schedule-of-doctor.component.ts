import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/service/doctor.service';
import { VisitService } from '../visit.service';
import { Months, ScheduleListService, Week, WeekDays } from './schedule-list.service';

@Component({
  selector: 'app-schedule-of-doctor',
  templateUrl: './schedule-of-doctor.component.html',
  styleUrls: ['./schedule-of-doctor.component.css']
})
export class ScheduleOfDoctorComponent implements OnInit {

  week: Week;
  dates: Array<Array<Date>>;
  occupiedDates: number[] = [];

  constructor(
    private scheduleListService: ScheduleListService,
    private visitService: VisitService,
    private doctorService: DoctorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    if(!this.visitService.getVisitData().doctorAcceptedId){
      this.router.navigate(["../"], {relativeTo: this.activatedRoute});
      return;
    }
    this.week = this.scheduleListService.getThisWeek();
    this.doctorService.getDoctorsTimetable(this.visitService.getVisitData().doctorAcceptedId);
    this.doctorService.occupiedTime.subscribe(
      (times: number[]) => {
        this.occupiedDates = times;
      }
    )
  }

  generateSchedule(){
    this.dates = this.scheduleListService.genUTCTimesArrays(
      8,
      16,
      this.week,
      3600
    );
    console.log(this.dates);
  }

  formatTime(date: Date){ // Send to lib
    const datepipe: DatePipe = new DatePipe('en-US');
    return datepipe.transform(date, 'HH:mm');
  }

  formatWeekDay(date: Date){ // Send to lib
    return WeekDays[date.getDay()];
  }

  formatMonth(date: Date){
    return Months[date.getMonth()];
  }

  onClickPrev(){
    this.scheduleListService.prev(this.week);
    this.generateSchedule();
  }

  onClickNext(){
    this.scheduleListService.next(this.week);
    this.generateSchedule();
  }

  onTimeClick(time: Date){
    this.visitService.updateDatetime(time.getTime());
    console.log(time);
    this.router.navigate(["../confirmation-page"], {relativeTo: this.activatedRoute});
  }

  checkAvailability(date: Date){

    const today = new Date();
    let tomorrow = new Date(today.setDate(today.getDate() + 1));
    tomorrow.setHours(0, 0, 0, 0);

    if(this.occupiedDates.includes(date.getTime())){
      return 0;
    }
    else if(date > tomorrow){
      return 1;
    }
    return 2;
  }
}
