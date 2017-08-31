import { Company } from '../../models/company';

export class Lead {
    id :number;

    company: Company;

  
    lead_status: string;
    lead_source:string;
    
    addresses: Address[];
    contacts: Contact[];

}


export class Contact{
    first_name: string;
    last_name: string;
    contact_owner:string;
    eamil:string;
    phone:string;
}
export class Address{
      
    street: string;
    city: string;
    state: string;
    zip_code:number;
    country: string;
    is_shipping:number;
 
        }
