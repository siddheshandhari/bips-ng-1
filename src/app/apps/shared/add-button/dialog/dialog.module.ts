import { NgModule } from '@angular/core';

import { MdDialogModule, MdButtonModule } from '@angular/material';


import { DialogComponent } from './dialog.component';


@NgModule({
    imports: [
        MdDialogModule,
        MdButtonModule,
    ],
    exports: [
        DialogComponent,
        
    ],
    declarations: [
        DialogComponent,
        
    ],
    
})
export class DialogModule { }