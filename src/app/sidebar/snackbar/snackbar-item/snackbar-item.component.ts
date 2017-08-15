import { Component } from '@angular/core';

@Component({
    selector:'snackbar-item',
    templateUrl: 'snackbar-item.component.html',
    styleUrls: ['snackbar-item.component.css']
})

export class SnackbarItemComponent{
    snackbarapps = SNACKBARAPPS;

}

export class SnackbarApps{
    id: number;
    name: string; 
    imageurl:string;
}

const SNACKBARAPPS : SnackbarApps[] =[
    {'id': 0, 'name': 'gmail', 'imageurl':'./../../assets/imgs/gmail.png'},
     {'id':3, 'name':'google', 'imageurl':'./../../assets/imgs/google.png'},
  {'id':4, 'name':'map', 'imageurl':'./../../assets/imgs/map.png'}
]