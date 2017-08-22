import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators,FormArray } from '@angular/forms'
import { HttpClient } from "@angular/common/http";

import { LeadInfo } from './add-lead.interface';



@Component({
    selector: 'add-lead',
    templateUrl: 'add-lead.component.html',
    styleUrls: ['add-lead.component.css'],

})

export class AddLeadComponent implements OnInit{

   public myForm: FormGroup;
 
    constructor(private http: HttpClient, private _formBuilder: FormBuilder ){

    }
    

    ngOnInit(){
        this.myForm = this._formBuilder.group({
            
            t_company :this._formBuilder.group({
                    company_name: [''],
                    website: [''],
            }),
            t_lead :this._formBuilder.group({
                    lead_status: new FormControl(''),
            }),
            shipping_address :this._formBuilder.group({
                    street: new FormControl(''),
            }),
            billing_address :this._formBuilder.group({
                    street:[''],
            }),
            contacts: this._formBuilder.array([
                this.initContact(),
            ])


        });

     }


     public initContact(){
         return this._formBuilder.group({
                firstname:[''],
                lastname:['']
            })

     }

     addContact(){
         const control = <FormArray>this.myForm.controls['contacts'];
         control.push(this.initContact());
     }

     removeContact(i: number){
         const control = <FormArray>this.myForm.controls['contacts'];
         control.removeAt(i);
     }

    // onSubmit(model: LeadInfo){
    //     console.log(model)
    // }
     onSubmit({value}:{value:LeadInfo}){
       event.preventDefault();
       console.log(JSON.stringify(value));
       const req = this.http.post('http://jsonplaceholder.typicode.com/posts',{
            value
        })
        .subscribe(
                    res =>{
                        console.log(JSON.stringify(res));
                        },
                    err =>{
                        console.log("error occored");
                    }
                 )

        
          }

}