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
                    tier:[''],
                    website: [''],
                    rating:[''],
                    annual_revenue:[''],
                    employees:[''],
                    industry:[''],
                    sub_industry:['']
            

            }),
            t_lead :this._formBuilder.group({
                    lead_status: [''],
                    lead_source:[''],
                    customer_type:['']
            }),
            shipping_address :this._formBuilder.group({
                    street:[''],
                    city:[''],
                    state:[''],
                    zip_code:[''],
                    country:[''],
                    isshipping:['1']
            }),
            billing_address :this._formBuilder.group({
                    street:[''],
                    city:[''],
                    state:[''],
                    zip_code:[''],
                    country:[''],
                    isshipping:['0']
            }),
            // addresses: this._formBuilder.array([
            //     this.initAddress(),
            // ]),
            contacts: this._formBuilder.array([
                this.initContact(),
            ])


        });

     }
    //  public initAddress(){
    //       return this._formBuilder.group({
    //         street:[''],
    //         city:[''],
    //         state:[''],
    //         zip_code:[''],
    //         country:[''],
    //         isshipping:['']
    //       })
    //  }

     public initContact(){
         return this._formBuilder.group({
                firstname:[''],
                lastname:[''],
                contact_owner:[''],
                email:[''],
                telephone:['']
            })

     }
    // addAddress(){
    //      const control = <FormArray>this.myForm.controls['contacts'];
    //      control.push(this.initAddress());
    //  }

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


