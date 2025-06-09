import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../user/user.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UnauthActivate implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.userService.isLogged) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}
