import { User, Company, Contact } from '../../../../models/index';

export class Account {
  id: number;
  account_number: number;
  sic_code: number;
  type: string;
  is_active: number;
  ownership: User;
  company: Company;
}
