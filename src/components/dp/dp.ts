import { Component, ViewChild, ErrorHandler } from '@angular/core';
import { DayPilot } from "daypilot-pro-angular";

/**
 * Generated class for the Dp component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dp',
  templateUrl: 'dp.html'
})
export class DpComponent {

result: any[] = [
    {
      id: "1",
      text: "Group 1",
      children: [
        {
          id: "2",
          start: "2017-05-02T00:00:00",
          end: "2017-05-08T00:00:00",
          text: "Task 1",
          complete: 45
        },
        {
          id: "3",
          start: "2017-05-05T00:00:00",
          end: "2017-05-10T00:00:00",
          text: "Task 2",
          complete: 5
        },
        {
          id: "4",
          start: "2017-05-10T00:00:00",
          type: "Milestone",
          text: "Milestone 1"
        }
      ]
    },
    {
      id: "5",
      start: "2017-05-10T00:00:00",
      end: "2017-05-15T00:00:00",
      text: "Task 3",
      complete: 0
    }
  ];

@ViewChild('gantt') gantt: DayPilot.Angular.Gantt;
   ganttconfig: any = {
    startDate: "2017-05-01",
    days: 31,
    tasks: this.result,
    links: []
  };


@ViewChild('month') month: DayPilot.Angular.Month;
   monthconfig: any = {
    startDate: "2017-05-01",
    // events: args => {
    //   alert("clicked event: " + args.e.text());
    // },
    onTimeRangeSelected: args => {
      alert("start: " + args.start+ "end: "+ args.end);
    },
    onEventClicked: args => {
      alert("clicked: " + args.e.text());
    },
    onEventMoved: args => {
      this.scheduler.control.message("Moved");
    },
    onEventResized: args => {
      this.scheduler.control.message("Moved");
    }
  };
  monthevents = [
          {
              start: new DayPilot.Date("2017-05-01"),
              end: new DayPilot.Date("2017-05-01"),
              id: DayPilot.guid(),
              text: "First Event"
          }
      ];




  @ViewChild('scheduler') scheduler: DayPilot.Angular.Scheduler;

  events: any[] = [
    { start: "2016-09-09", end: "2016-09-10", id: 1, text: "Event 1", resource: "R1" }
  ];

  schedulerconfig: any = {
    scale: "Day",
    startDate: "2016-09-01",
    days: new DayPilot.Date("2016-09-09").daysInMonth(),
    timeHeaders: [
      { groupBy: "Month" },
      { groupBy: "Day", format: "d" }
    ],
    cellWidthSpec: "Auto",
    resources: [
      { name: "R1", id: "R1" },
      { name: "R2", id: "R2" },
      { name: "R3", id: "R3" },
    ],
    onTimeRangeSelected: args => {
      alert("start: " + args.start+ "end: "+ args.end);
    },
    onEventClicked: args => {
      alert("clicked: " + args.e.text());
    },
    onEventMoved: args => {
      this.scheduler.control.message("Moved");
    },
    onEventResized: args => {
      this.scheduler.control.message("Moved");
    }
  };

  constructor() {
    console.log('Hello Dp Component');
  }



}
