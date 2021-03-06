import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../../core/services/company.service';
import { NotesService } from '../notes.service';
import { Company } from '../../../core/models/index';

@Component({
  selector: 'add-note',
  templateUrl: 'add-note.component.html',
  styleUrls: ['add-note.component.css']
})

export class AddNoteComponent implements OnInit{
  isPersonal: boolean = false;
  companies: Array<Company>;
  contextLabel: string;
  contexts: Array<any> =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  //visiable
  categoryVisiable: boolean = false;
  contextVisiable: boolean = false;
  noteForm: FormGroup;
  categories: Array<string> = ['Sales Order', 'Quotes', 'Invoice', 'Projects'];
  @Output() onNoteAdded = new EventEmitter();
  constructor(private companyService: CompanyService, private notesService: NotesService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(){
    this.companyService.getCompanies().subscribe(
      res => this.companies = res
    );
    this.loadSelectionListener();
  }

  loadSelectionListener(){
    const companyControl = this.noteForm.get('company');
    const categoryControl = this.noteForm.get('category');

    //when company selection is changed
    companyControl.valueChanges.subscribe(
      company => {
        if(this.bothSelected()){
          this.contextVisiable = true;
          this.getContext();
        } else {
          this.contextVisiable = false;
        }
      }
    )
    //when category selection is changed
    categoryControl.valueChanges.subscribe(
      category => {
        if(this.bothSelected()){
          this.contextVisiable = true;
          this.getContext();
        } else {
          this.contextVisiable = false;
        }
      }
    )
  }

  getContext(){
    const category = this.noteForm.get('category').value;
    const companyId = this.noteForm.get('company').value;
    if(category == "projects"){
      this.contextLabel = "Project number";
        // TODO: search api for project
    } else if(category == "Quotes"){
      this.contextLabel = "Quote number";
        // TODO: search api for quotes
    } else if(category == "Invoice"){
      this.contextLabel = "Invoice number";
        // TODO: search api for invoice
    } else {
      this.contextLabel = "Sales Order number";
      //category == sales order
    }
  }

  bothSelected(){
    const companyControl = this.noteForm.get('company');
    const categoryControl = this.noteForm.get('category');
    if(companyControl.value && categoryControl.value && companyControl.value != "null" && categoryControl.value != 'null'){
      return true;
    }
    return false
  }

  createForm(){
    this.noteForm = this.fb.group({
      company: [''],
      category: [''],
      context: [''],
      subject: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onSave(){
    const note = Object.assign({ is_personal: this.isPersonal }, this.noteForm.value)
    this.onNoteAdded.emit(note);
  }



}
