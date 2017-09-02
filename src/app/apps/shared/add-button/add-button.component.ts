import { Component, Inject } from '@angular/core';
import { MdDialog, MD_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'add-button',
  templateUrl: 'add-button.component.html',
  styleUrls: ['add-button.component.css']
})
export class AddButtonComponent{

  constructor (private dialog: MdDialog) {}

  public openDialog() {
    this.dialog.open(DialogComponent, { width: '250px' });
  }

}
