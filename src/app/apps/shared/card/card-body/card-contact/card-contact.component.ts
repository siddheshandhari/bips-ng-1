import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-contact',
  templateUrl: 'card-contact.component.html',
  styleUrls: ['card-contact.component.css'],

})
export class CardContactComponent{

  @Input() name: string;
  @Input() position: string;
  @Input() phone: string;
  @Input() email: string;
  @Input() skype: string;

}
