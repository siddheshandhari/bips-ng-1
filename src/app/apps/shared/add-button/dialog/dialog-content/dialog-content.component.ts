import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.component.html',
  styleUrls: ['dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {


  //fake dialog page, just for test
  public title: string;
  public message: string;

  constructor(public MdDialogRef: MdDialogRef<DialogContentComponent>) { }

  ngOnInit() {
  } 

}
