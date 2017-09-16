import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'clock',
  template: `
    {{time | async | date:'short'}}
  `,
  styleUrls: ['clock.component.css']
})

export class ClockComponent implements OnInit, OnDestroy {
  ngOnInit(): void{

  };

  ngOnDestroy(): void{

  };

  time = Observable.interval(1000).map(() => new Date());
};
