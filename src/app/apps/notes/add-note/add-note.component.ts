import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../../core/services/company.service';
import { Company } from '../../../core/models/index';

@Component({
  selector: 'add-note',
  templateUrl: 'add-note.component.html',
  styleUrls: ['add-note.component.css']
})

export class AddNoteComponent implements OnInit{

  companies: Array<Company>;
  contexts: Array<any>;
  contextVisiable: boolean = false;
  noteForm: FormGroup;
  categories: Array<string> = ['Sales Order', 'Quotes', 'Invoice', 'Projects'];

  constructor(private companyService: CompanyService, private fb: FormBuilder) {
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
      selectedCompanyId => {
        this.changeContextVisiable();
      }
    )
    //when category selection is changed
    categoryControl.valueChanges.subscribe(
      selectedCategory => {
        this.changeContextVisiable();
      }
    )
  }

  getContext(){

  }

  changeContextVisiable(){
    const companyControl = this.noteForm.get('company');
    const categoryControl = this.noteForm.get('category');
    if(companyControl.value && categoryControl.value && companyControl.value != "null" && categoryControl.value != 'null'){
      this.contextVisiable = true;
    } else {
      this.contextVisiable = false;
    }
  }

  createForm(){
    this.noteForm = this.fb.group({
      subject: ['', Validators.required],
      company: '',
      category: 'Sales Order',
      context: '',
      body: ['', Validators.required]
    });
  }


  onSave(){
    console.log(this.noteForm.value);
  }



}
