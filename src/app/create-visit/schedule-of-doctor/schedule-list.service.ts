import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";

type DateObject = {
  today: Date;
  firstWeekDay: Date;
  lastWeekDay: Date;
}

@Injectable({providedIn: 'root'})
export class ScheduleListService implements OnInit {

  schedulesChanged = new Subject<Date[]>();
  datesChanged = new Subject<DateObject>();

  today = new Date(new Date().setHours(0,0,0,0));

  firstDay = this.today.getDate() - this.today.getDay();

  firstWeekDay = new Date(this.today.setDate(this.firstDay));
  lastWeekDay =  new Date(this.today.setDate(this.firstDay + 7));

  schedulesTaken: Date[];

  schedulesFree: Date[] = [];

  ngOnInit(): void {

    /*this.schedulesTaken = [
      new Date(this.today.valueOf() + 32400),
      new Date(this.today.valueOf() + 36000),
      new Date(this.today.valueOf() + 39600)
    ];*/
  }

}
