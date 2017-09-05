import { Company } from '../../models/company';
import { User } from '../../models/user';

export class Lead {
    id : number;
    company : Company;
    user: User;
    status: string;
    source : string;
}
