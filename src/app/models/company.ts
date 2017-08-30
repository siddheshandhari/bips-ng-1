import { Contact, Address } from './index';

export class Company {
  id: number;
  name: string;
  website: string;
  employees: number;
  rating: number;
  industry: string;
  tier: number;
  annualrevenue: string;
  is_active: number;
  contacts: Contact[];
  addresses: Address[];
}
