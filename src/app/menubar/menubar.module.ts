import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module
import { IconModule } from '../icon/icon.module';

import { MenubarComponent } from './menubar.component';
import { MenubarListComponent } from './menubar-list/menubar-list.component';
import { MenubarItemComponent } from './menubar-list/menubar-item/menubar-item.component';

@NgModule({
  declarations: [
    MenubarComponent,
    MenubarListComponent,
    MenubarItemComponent,
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    MenubarComponent
  ]
})
export class MenubarModule { }
