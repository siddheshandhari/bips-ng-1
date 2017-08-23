import { User, Company, Contact } from '../../../../models/index';

export class Account {
  id: number;
  number: number;
  sic_code: number;
  type: string;
  is_active: number;
  ownership: User;
  company: Company;
}
