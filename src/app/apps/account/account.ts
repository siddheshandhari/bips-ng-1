import { Company } from '../../models/company';
import { User } from '../../models/user';

export class Account {
    id : number;
    company : Company;
    user: User;
    account_number: string;
    sic_code: string;
    account_type: string;
}
