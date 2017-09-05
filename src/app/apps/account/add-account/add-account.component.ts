import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-account',
  templateUrl: 'add-account.component.html',
  styleUrls: ['add-account.component.css']
})

export class AddAccountComponent{
  @Output() requestCloseModal = new EventEmitter();

  onSave(){
    this.requestCloseModal.emit();
  }

  onCancel(){
    this.requestCloseModal.emit();
  }
}
