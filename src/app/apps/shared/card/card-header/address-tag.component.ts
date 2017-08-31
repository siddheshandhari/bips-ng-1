import { Component } from '@angular/core';

@Component({
  selector: 'address-tag',
  template: `
    <i class="fa fa-map-marker"></i>
    <span><ng-content></ng-content></span>
  `
})

export class AddressTagComponent{

};
