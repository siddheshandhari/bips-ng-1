import { Component, Input } from '@angular/core';
import { App } from '../../apps/app';


@Component({
  selector: 'tools',
  templateUrl: 'tools.component.html',
  styleUrls: ['tools.component.css']
})

export class ToolsComponent {
  @Input() apps: Array<object>;
}
