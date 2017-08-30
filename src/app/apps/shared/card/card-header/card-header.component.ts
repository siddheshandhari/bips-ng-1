import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-header',
  templateUrl: 'card-header.component.html',
  styleUrls: ['card-header.component.css']
})

export class CardHeaderComponent{
  @Input() logo: string;
  @Input() name: string;
  @Input() industry: string;
  @Input() address: string;
};
