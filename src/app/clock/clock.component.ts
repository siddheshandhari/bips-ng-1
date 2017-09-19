import { Component, OnInit } from '@angular/core';
import { ClockService } from "./clock.service";

@Component({
  selector: 'clock',
  templateUrl: 'clock.component.html',
  styleUrls: ['clock.component.css']
})
export class ClockComponent implements OnInit {

  time: Date;

  constructor(private clockService: ClockService) { }

  ngOnInit() {
    this.clockService.getClock().subscribe(time => this.time = time);
  }

}
