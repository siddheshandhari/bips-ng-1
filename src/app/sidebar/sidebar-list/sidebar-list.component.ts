import { Component, Input } from '@angular/core';
import { App } from '../../apps/app';


@Component({
  selector: 'sidebar-list',
  templateUrl: 'sidebar-list.component.html',
  styleUrls: ['sidebar-list.component.css']
})

export class SidebarListComponent {
  @Input() apps: Array<object>;
}
