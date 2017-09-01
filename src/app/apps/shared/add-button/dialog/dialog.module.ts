import { NgModule } from '@angular/core';
import { DialogService } from './dialog.service';
import { MdDialogModule, MdButtonModule } from '@angular/material';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, OVERLAY_PROVIDERS, ScrollStrategyOptions, ScrollDispatcher } from '@angular/material';

import { DialogComponent } from './dialog.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

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
        DialogContentComponent,
    ],
    providers: [
        DialogService,
        OVERLAY_PROVIDERS,
        ScrollStrategyOptions,
        ScrollDispatcher,
    ],
    entryComponents: [
        DialogContentComponent,
    ],
})
export class DialogModule { }