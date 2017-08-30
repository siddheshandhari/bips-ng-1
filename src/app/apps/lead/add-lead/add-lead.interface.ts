export interface LeadInfo{
    company?:{
        company_name: string;
        website: string;
        tier: string;
        rating: string;
        annual_revenue:number;
        employees: number;
        industry: string;
        sub_industry:string;

    },
    user?:{
        id:number;
    }
    lead?:{
        lead_status: string;
        lead_source:string;
        customer_type:string;
    },
    addresses: Address[];
   
    contacts: Contact[];

}

export interface Contact{
    first_name: string;
    last_name: string;
    contact_owner:string;
    eamil:string;
    phone:string;
}
export interface Address{
      
    street: string;
    city: string;
    state: string;
    zip_code:number;
    country: string;
    is_shipping:number;
 
        }
