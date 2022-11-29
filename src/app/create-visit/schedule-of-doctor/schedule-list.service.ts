import { Injectable } from "@angular/core";

export enum WeekDays {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT
}

export enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

export interface Week {
  firstDay: Date;
  lastDay: Date;
}

export interface ExtendedTime {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

/* export interface WeekSchedule {
  weekendDays: WeekDays[],
  monday: Date[],
  tuesday: Date[],
  wednesday: Date[],
  thursday: Date[],
  friday: Date[],
  saturday: Date[],
  sunday: Date[],
} */

@Injectable({providedIn: 'root'})
export class ScheduleListService {

  getThisWeek(startDay: string = 'MONDAY'): Week {
    let dayOffset: number = 1;

    switch(startDay){
      case 'SATURDAY': {
        dayOffset -= 2;
        break;
      }
      case 'SUNDAY': {
        dayOffset -= 1;
        break;
      }
    }

    let today = new Date(new Date().setUTCHours(0, 0, 0, 0));
    let firstDay = today.getDate() - today.getDay() + dayOffset;

    return {
      firstDay: new Date(today.setDate(firstDay)),
      lastDay: new Date(today.setDate(firstDay + 7))
    }
  }

  next(week: Week): Week {
    week.firstDay.setUTCDate(week.firstDay.getUTCDate() + 7);
    week.lastDay.setUTCDate(week.lastDay.getUTCDate() + 7);
    return week;
  }

  prev(week: Week): Week {
    week.firstDay.setUTCDate(week.firstDay.getUTCDate() - 7);
    week.lastDay.setUTCDate(week.lastDay.getUTCDate() - 7);
    return week;
  }

  genUTCTimes(
    startTime: number,
    endTime: number,
    week: Week,
    secsInterval?: number
  ): Date[] {

    startTime = startTime >= 0 && startTime < 24 ? startTime : 0;
    endTime = endTime > 0 && endTime <= 24 ? endTime : 24;
    secsInterval = secsInterval || 3600;
    secsInterval = secsInterval < 86400 ? secsInterval : 86400;

    let startingDate = week.firstDay;
    let dates: Date[] = [];

    while(startingDate < week.lastDay){
      let newDate = startingDate;
      if(newDate.getHours() >= startTime && newDate.getHours() < endTime){
        dates.push(newDate);
      }
      // startingDate.setSeconds(startingDate.getSeconds() + secsInterval);
      startingDate = new Date(startingDate.getTime() + secsInterval * 1000);
    }

    return dates;
  }

  genFreeUTCTimes( // Must be working independent from timezone
    startTime: number,
    endTime: number,
    week: Week,
    dates: Date[],
    secsInterval?: number
  ): Date[]{
    let datesArray: Date[] = this.genUTCTimes(startTime, endTime, week, secsInterval);

    let times = dates.map(
      (date) => date.getTime()
    );

    return datesArray.filter(
      (element) => {
        return !times.includes(element.getTime());
      }
    );
  }


  genFreeUTCTimesWithNumArray( // Must be working independent from timezone
    startTime: number,
    endTime: number,
    week: Week,
    times: number[],
    secsInterval?: number
  ){
    let datesArray: Date[] = this.genUTCTimes(startTime, endTime, week, secsInterval);

    return datesArray.filter(
      (element) => {
        return !times.includes(element.getTime());
      }
    );
  }

  genUTCTimesArrays(
    startTime: number,
    endTime: number,
    week: Week,
    secsInterval?: number
  ){

    startTime = startTime >= 0 && startTime < 24 ? startTime : 0;
    endTime = endTime > 0 && endTime <= 24 ? endTime : 24;
    secsInterval = secsInterval || 3600;
    secsInterval = secsInterval < 86400 ? secsInterval : 86400;

    let countDate = structuredClone(week.firstDay);

    let scheduleArray: Array<Array<Date>> = [];

    for(let day = 0; day < 7; day++) {
      let dates: Date[] = [];
      countDate.setHours(startTime, 0, 0, 0);

      while(countDate.getHours() < endTime){
        dates.push(structuredClone(countDate));
        countDate = new Date(countDate.getTime() + secsInterval * 1000);
      }

      countDate.setDate(countDate.getDate() + 1);
      scheduleArray.push(dates.slice());
    }
    return scheduleArray;
  }
}
