import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './add-button.component';
import { MdDialogModule, MdButtonModule, } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule ({
    imports: [
      CommonModule,
      MdDialogModule,
      MdButtonModule,
      BrowserAnimationsModule
    ],
    declarations: [
      AddButtonComponent,
      DialogComponent
    ],
    providers: [

    ],
    exports: [
      AddButtonComponent,
    ],
    entryComponents: [
      DialogComponent
    ]
})
export class AddButtonModule {}
