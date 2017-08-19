import { NgModule } from '@angular/core';

import { InventoryComponent } from './inventory.component';


@NgModule({
  declarations: [
    InventoryComponent,
  ],
  exports: [
    InventoryComponent
  ]

})
export class InventoryModule { }
