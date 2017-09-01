import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './add-button.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, OVERLAY_PROVIDERS, ScrollStrategyOptions, ScrollDispatcher, Platform } from '@angular/material';
import { DialogModule } from './dialog/dialog.module';
import { DialogContentComponent } from './dialog/dialog-content/dialog-content.component';

@NgModule ({
    imports: [
        CommonModule,
        
    ],
    declarations: [
        AddButtonComponent,
        DialogComponent,
        DialogContentComponent,
    ],
    providers: [
        DialogService,
        MdDialog,
        OVERLAY_PROVIDERS,
        ScrollStrategyOptions, 
        ScrollDispatcher,
        Platform,
        
    ],
    exports: [
        AddButtonComponent,
    ],
    entryComponents: [
        DialogContentComponent,
    ],
    
})
export class AddButtonModule {} 