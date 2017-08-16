import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
    isLogIn = false;
    constructor (private router: Router) {}

    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.isLogIn){
            return true;
        }
        this.router.navigate(['./login'],{queryParams: { returnUrl:state.url }});
        return false;
    }
}


