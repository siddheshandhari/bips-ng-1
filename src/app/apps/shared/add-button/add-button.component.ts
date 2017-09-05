import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-button',
  templateUrl: 'add-button.component.html',
  styleUrls: ['add-button.component.css'],
})
export class AddButtonComponent{
  @Input() modalOpen: boolean;
  
}
