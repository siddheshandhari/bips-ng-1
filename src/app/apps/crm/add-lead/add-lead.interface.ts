export interface LeadInfo{
    t_company?:{
        company_name: string;
        website: string;
        tier: string;
        rating: string;
        annual_revenue:string;
        employees: string;
        industry: string;
        sub_industry:string;

         


    },
    t_lead?:{
        lead_status: string;
        lead_source:string;
        customer_type:string;
    },
    shipping_address?:{
        street: string;
        city: string;
        state: string;
        zip_code:number;
        country: string;

    },
    billing_address?:{
        street: string;
        city: string;
        state: string;
        zip_code:number;
        country: string;
    },
    contacts: Contact[];



}

export interface Contact{
    firstname: string;
    lastname: string;
    contact_owner:string;
    eamil:string;
    tepephone:string;
}