import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],

})
export class TimeComponent implements OnInit {

  private date;
  private name;
  public startTime: Number = Date.now();
  public endTime: Number = Date.now();

constructor() {
    this.name = 'Angular2';

     this.date =  Date.now();

  }

  ngOnInit() {
  }
}
