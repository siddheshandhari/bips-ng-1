import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-note',
  templateUrl: 'add-note.component.html',
  styleUrls: ['add-note.component.css']
})

export class AddNoteComponent{

  noteForm: FormGroup;
  categories: Array<string> = ['Sales Order', 'Quotes', 'Invoice', 'Projects'];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.noteForm = this.fb.group({
      subject: ['', Validators.required],
      company: '',
      category: '',
      context: '',
      body: ['', Validators.required]
    });
  }

  onSave(){
    console.log(this.noteForm.value);
  }



}
