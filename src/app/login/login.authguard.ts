import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { LoginService } from './login.service';

@Injectable()
export class LoginAuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (localStorage.getItem('currentUser')) {
          return true;
      }

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
}

// @Injectable()
// export class AuthGuard implements CanActivate{
    
//     constructor (private login:LoginService) {}

//     canActivate(
//      next: ActivatedRouteSnapshot,
//      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
//      return this.login.getUserLoggedIn();
//     } 
// }


