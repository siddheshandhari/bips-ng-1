import { Component } from '@angular/core';

@Component({
    selector: 'currentuserinfo',
    templateUrl: 'current-user.component.html',
    styleUrls: ['current-user.component.css']
})


export class CurrentUserInfo{
    showavatar = false;
    imageurl='./../../assets/imgs/user.png';

    showAvatar(){
        if(!this.showavatar){
            this.showavatar = true;
        }
        else{
            this.showavatar = false;
        }
        
    }
}