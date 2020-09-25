import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})

export class AuthGuard implements CanActivate {
   constructor(private router: Router) { }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const logged = localStorage.getItem('username');
      if (logged) return true;
      this.router.navigate(['/login']);
   }
}