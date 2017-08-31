import { Component } from '@angular/core';

@Component({
  selector: 'industry-tag',
  template: `
    <i class="fa fa-briefcase"></i>
    <span><ng-content></ng-content></span>
  `
})

export class IndustryTagComponent{

};
