import { Company } from '../../core/models/company';
import { User } from '../../core/models/user';

export class Potential {
    id : number;
    company : Company;
    user: User;
    status: string;
    source : string;
}