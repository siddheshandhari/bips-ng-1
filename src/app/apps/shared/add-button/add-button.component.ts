import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { DialogService } from './dialog/dialog.service';

@Component({
  selector: 'add-button',
  templateUrl: 'add-button.component.html',
  styleUrls: ['add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  // 
  public result: any;

  constructor (private dialogService: DialogService) {}

  public openDialog() {
    this.dialogService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
  }

  // animal: string;
  // name: string;

  // constructor(public dialog: MdDialog) {}

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(AddButtonDialog, {
  //     width: '250px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

  ngOnInit() {
  }

}

// @Component({
//   selector: 'add-button-dialog',
//   templateUrl: 'add-button-dialog-component.html',
// })
// export class AddButtonDialog {

//   constructor(
//     public dialogRef: MdDialogRef<AddButtonDialog>,
//     @Inject(MD_DIALOG_DATA) public data: any) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }


