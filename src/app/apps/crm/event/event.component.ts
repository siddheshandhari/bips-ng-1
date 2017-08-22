
import { Component } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['event.component.css']
})

export class EventComponent{
  constructor(public eventService: EventService){
    this.getEventList();
  }

  getEventList(){
    this.eventService.getEventList()
      .subscribe(
        res => console.log(res)
      )
  }
}
