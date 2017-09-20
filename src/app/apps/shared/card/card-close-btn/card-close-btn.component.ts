import { Component } from '@angular/core';

@Component({
  selector: 'card-close-btn',
  template: `
    <i class="fa fa-times"></i>
  `,
  styles: [`
    :host{
      display: block;
      position: absolute;
      top: 8px;
      right: 10px;
      color: #E8E8E8;
      cursor: pointer;
    }
  `]

})

export class CardCloseBtnComponent{

}
