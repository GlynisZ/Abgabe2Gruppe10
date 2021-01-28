// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Observable } from 'rxjs';

// eslint-disable-next-line object-curly-newline
@Injectable({
    providedIn: 'root', // eslint-disable-next-line object-curly-newline
})
export class AuthGuard implements CanActivate {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
    ) {
        //
    }

    canActivate(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental, @typescript-eslint/no-unused-vars
        route: ActivatedRouteSnapshot,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-unused-vars-experimental
        state: RouterStateSnapshot,
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this.authService.base64token) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.router.navigate(['/home']);
        return false;
    }
}
