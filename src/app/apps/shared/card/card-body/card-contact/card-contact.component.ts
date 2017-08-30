import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-contact',
  templateUrl: 'card-contact.component.html',
  styleUrls: ['card-contact.component.css'],
  
})
export class CardContactComponent implements OnInit {
  
  @Input() contact: object;

  constructor() { }

  ngOnInit() {
  }

}
