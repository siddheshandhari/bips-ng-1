import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'clock',
  template: `
    {{date | async | date:'short'}}
  `,
  styleUrls: ['clock.component.css']
})

export class ClockComponent {
  date = Observable.interval(1000).map(() => new Date());
};
