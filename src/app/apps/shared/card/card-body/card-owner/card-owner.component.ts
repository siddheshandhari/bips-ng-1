import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-owner',
  templateUrl: 'card-owner.component.html',
  styleUrls: ['card-owner.component.css']
})
export class CardOwnerComponent implements OnInit {
  @Input() owner: string;

  constructor() { }

  ngOnInit() {
  }

}
