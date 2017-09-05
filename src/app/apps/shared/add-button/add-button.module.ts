import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './add-button.component';

@NgModule ({
    imports: [
      CommonModule,
    ],
    declarations: [
      AddButtonComponent,
    ],
    providers: [

    ],
    exports: [
      AddButtonComponent,
    ]
})
export class AddButtonModule {}
