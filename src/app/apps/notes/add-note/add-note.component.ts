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
  noteForm: FormGroup;
  categories: Array<string> = ['Sales Order', 'Quotes', 'Invoice', 'Projects'];

  constructor(private companyService: CompanyService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(){
    this.companyService.getCompanies().subscribe(
      res => this.companies = res
    )
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
