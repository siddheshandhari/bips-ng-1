import { Component } from '@angular/core';

@Component({
  selector: 'sidebar-item',
  templateUrl: 'sidebar-item.component.html',
  styleUrls: ['sidebar-item.component.css']
})

export class SidebarItemComponent {
 apps = APPS;
 hero = {
  id: 1,
  name: 'Windstorm'
};
}

export class Apps{
  id: number;
  name: string;
  imageurl: string;

}

const APPS : Apps[] =[
  {'id':0, 'name':'company', 'imageurl':'./../../assets/imgs/company.png'},
  {'id':2, 'name':'folder', 'imageurl':'./../../assets/imgs/folder.png'},
  {'id':3, 'name':'crm', 'imageurl':'./../../assets/imgs/crm.png'},
  {'id':4, 'name':'contact', 'imageurl':'./../../assets/imgs/contact.png'}
]
