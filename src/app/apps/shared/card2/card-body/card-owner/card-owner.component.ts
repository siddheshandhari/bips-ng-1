import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-owner',
  templateUrl: 'card-owner.component.html',
  styleUrls: ['card-owner.component.css']
})
export class CardOwnerComponent {
  @Input() name: string;
  @Input() portraitUrl: string;

}
