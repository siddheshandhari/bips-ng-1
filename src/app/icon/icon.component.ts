import { Component, Input } from '@angular/core';
import { AppsService } from '../apps/apps.service';

@Component({
  selector: 'icon',
  templateUrl: 'icon.component.html',
  styleUrls: ['icon.component.css'],
  host: {
    "(click)": "appsService.launchApp(app.id)"
  }
})

export class IconComponent {
  @Input() app: object;
  constructor(private appsService: AppsService){
  }
}
