import { NgModule } from '@angular/core';
import { DialogService } from './dialog.service';
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
    providers: [
        DialogService,
    ],
    entryComponents: [
        DialogComponent,
    ],
})
export class DialogModule { }