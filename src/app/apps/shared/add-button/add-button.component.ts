import { Component, OnInit, Inject } from '@angular/core';

import { DialogService } from './dialog/dialog.service';

@Component({
  selector: 'add-button',
  templateUrl: 'add-button.component.html',
  styleUrls: ['add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  
  // fake data
  
  public result: any;
  
  constructor (private dialogService: DialogService) {}

  public openDialog() {
    this.dialogService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
  }

  ngOnInit() {
  }

}


