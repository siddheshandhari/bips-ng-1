import { Observable } from 'rxjs/Rx';
import { DialogComponent } from './dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@Injectable()
export class DialogService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MdDialogRef<DialogContentComponent>;

        dialogRef = this.dialog.open(DialogContentComponent);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}