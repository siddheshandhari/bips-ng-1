import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-contact',
  templateUrl: 'card-contact.component.html',
  styleUrls: ['card-contact.component.css'],
  inputs: ['./card-body'],

})
export class CardContactComponent implements OnInit {
  @Input() name: string;
  @Input() position: string;

  constructor() { }

  ngOnInit() {
  }

}
