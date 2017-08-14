import { InMemoryDbService } from 'angular-in-memory-web-api';

export class SidebarAppMemoryData implements InMemoryDbService  {
    createDb(){
        const apps = [
            {  name: 'comapny', url:'./../../assets/imgs/company.png'}
        ];
        return {apps}
    }
}