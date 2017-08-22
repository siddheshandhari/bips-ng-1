export interface LeadInfo{
    t_company?:{
        company_name: string;
        website: string;

    },
    t_lead?:{
        lead_status: string;
    },
    shipping_address?:{
        street: string;

    },
    billing_address?:{
        street: string;
    },
    contacts: Contact[];



}

export interface Contact{
    firstname: string;
    lastname: string;
}