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

            company :this._formBuilder.group({
                    name: [''],
                    tier:[''],
                    website: [''],
                    rating:[''],
                    annual_revenue:[''],
                    employees:[''],
                    industry:[''],
            

            }),

            user : this._formBuilder.group({
                    id:[''],
            })
            // lead :this._formBuilder.group({
            //         lead_status: [''],
            //         lead_source:[''],
            //         customer_type:['']
            // }),
            // address: this._formBuilder.array([
            //     this.initAddress(),
            //     this.initAddress1(),
            // ]),
            // contacts: this._formBuilder.array([
            //     this.initContact(),
            // ])



        });

     }

     public initContact(){
         return this._formBuilder.group({
                first_name:[''],
                last_name:[''],
                contact_owner:[''],
                email:[''],
                phone:['']
            })

     }

      public initAddress(){
         return this._formBuilder.group({
                    street:[''],
                    city:[''],
                    state:[''],
                    zip_code:[''],
                    country:[''],
                    is_shipping:['1']
            },
            )

     }
     public initAddress1(){
         return this._formBuilder.group({
                    street:[''],
                    city:[''],
                    state:[''],
                    zip_code:[''],
                    country:[''],
                    is_shipping:['0']
            },
            )

     }


    
    addAddress(){
         const control = <FormArray>this.myForm.controls['address'];
         control.push(this.initAddress());
     }

    addContact(){
         const control = <FormArray>this.myForm.controls['contacts'];
         control.push(this.initContact());
     }

    removeContact(i: number){
         const control = <FormArray>this.myForm.controls['contacts'];
         control.removeAt(i);
     }

     onSubmit({value}:{value:LeadInfo},model: LeadInfo){
       event.preventDefault();
       console.log(JSON.stringify(value));
       const req = this.http.post('http://192.168.50.25/api/v1/lead',value)
        .subscribe(
                    res =>{
                        console.log(JSON.stringify(res));
                        },
                    err =>{
                        console.log("error occored");
                    }
                 )
         this.myForm.reset();
    
          }
          

}


