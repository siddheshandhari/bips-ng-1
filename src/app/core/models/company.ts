import { Contact, Address } from './index';

export class Company {
  id: number;
  name: string;
  website: string;
  employees: number;
  rating: number;
  industry: string;
  tier: number;
  annual_revenue: string;
  is_active: number;
  contacts: Contact[];
  shipping_address: Address;
  billing_address: Address;
}
