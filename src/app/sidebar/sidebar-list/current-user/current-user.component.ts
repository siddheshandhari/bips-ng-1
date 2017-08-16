import { Component } from '@angular/core';

@Component({
    selector: 'currentuserinfo',
    templateUrl: 'current-user.component.html',
    styleUrls: ['current-user.component.css']
})


export class CurrentUserInfo{
        name="UserName";
        imageurl='./../../assets/imgs/user.png';
}