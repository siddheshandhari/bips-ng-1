export interface LeadModel{
    t_company?:{
        company_name?: string;
        website?:string;

    },
    t_lead?:{
        lead_status?: string;

    },

    shipping_address?: {
        street?:string;
    },

    billing_address?:{
        street?:string;

    },
    contacts : initContact[];

}

export interface initContact{
    firstname: string;
    lastname: string;
}