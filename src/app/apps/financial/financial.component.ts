import { Component } from '@angular/core';

@Component({
  selector: 'financial',
  templateUrl: 'financial.component.html',
  styleUrls: ['financial.component.css'],
})

export class FinancialComponent{
  companies: Array<object> = [
    {
      name: "Glopak",
      address: "Hicksville",
      industry: "technology",
      contacts:  [
        {
          phone: "",
          email: "",
          skype: "",
          name: "Jack",
          position: "CTO"
        }
      ]
    },
    {
      name: "OrcaSmart",
      address: "35 Engel St",
      industry: "technology",
      contacts:  [
        {
          phone: "",
          email: "",
          skype: "",
          name: "Keni",
          position: "CEO"
        },
        {
          phone: "",
          email: "",
          skype: "",
          name: "wang",
          position: "Employee"
        }
      ]

    }

  ]

}
