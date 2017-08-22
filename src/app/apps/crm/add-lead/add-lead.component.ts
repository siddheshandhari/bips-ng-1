import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from "@angular/common/http";

import { LeadModel } from './lead.interface';

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

     initContact(){
         return this._formBuilder.group({
                firstname:[''],
            })

     }

    onSubmit(myForm){
        console.log('onSubmit called')

    // onSubmit(addleadForm){
    //    event.preventDefault();
    //    const req = this.http.post('http://jsonplaceholder.typicode.com/posts',{
    //         addleadForm
    //     })
    //     .subscribe(
    //                 res =>{
    //                     console.log(JSON.stringify(res));
    //                     },
    //                 err =>{
    //                     console.log("error occored");
    //                 }
    //              )

    //      console.log(JSON.stringify(addleadForm));
    // }

}
}
