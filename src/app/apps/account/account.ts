import { Company } from '../../core/models/company';
import { User } from '../../core/models/user';

export class Account {
    id : number;
    company : Company;
    user: User;
    account_number: string;
    sic_code: string;
    account_type: string;
}
