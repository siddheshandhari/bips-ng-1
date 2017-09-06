import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SignupService } from './signup.service';

@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor (private signup: SignupService) {}

    canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
     return this.signup.getUserSignedUp();
    } 
}