import { NgModule } from '@angular/core';
import { AppsService } from '../apps/apps.service';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [
    IconComponent
  ],
  providers: [
    AppsService
  ],
  exports: [
    IconComponent
  ]
})

export class IconModule { }
