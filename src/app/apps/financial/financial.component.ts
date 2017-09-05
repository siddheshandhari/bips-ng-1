import { Component } from '@angular/core';

@Component({
  selector: 'financial',
  templateUrl: 'financial.component.html',
  styleUrls: ['financial.component.css'],
})

export class FinancialComponent{

  things: Array<object> = [
    {
      logoUrl: "assets/imgs/logos/orcasmart.png",
      title: "Orcasmart",
      address: {
        country: "United States",
        state: "NY",
        city: "Hicksville",
        street: "35 Engel Street",
        zipcode: 11801
      },
      industry: "Packaging",
      facebook: "",
      twitter: "",
      phone: ""
    },
    {
      logoUrl: "assets/imgs/logos/orcasmart.png",
      title: "Orcasmart",
      address: {
        country: "United States",
        state: "NY",
        city: "Hicksville",
        street: "35 Engel Street",
        zipcode: 11801
      },
      industry: "Packaging",
      facebook: "",
      twitter: "",
      phone: ""
    }
  ];

  deleteCard(){
    console.log('deleted');
  }

}
