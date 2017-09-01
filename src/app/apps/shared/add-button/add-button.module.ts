import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './add-button.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule ({
    imports: [
        CommonModule,
    ],
    declarations: [
        AddButtonComponent,
        DialogComponent,
        
    ],
    exports: [
        AddButtonComponent,
    ]
})
export class AddButtonModule {} 