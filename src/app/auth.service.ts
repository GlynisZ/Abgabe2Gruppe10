/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public base64token: string;

    // eslint-disable-next-line no-useless-constructor
    constructor(
        private readonly router: Router,
        private readonly backendService: BackendService,
    ) {
        //
    }

    async login(username: string, password: string) {
        this.base64token = window.btoa(`${username}:${password}`);
        localStorage.setItem('base64token', this.base64token);
        localStorage.setItem('username', username);
        // eslint-disable-next-line no-extra-parens
        if (!(await this.backendService.login())) {
            // eslint-disable-next-line no-null/no-null, unicorn/no-null
            this.base64token = null;
            localStorage.removeItem('base64token');
            localStorage.removeItem('username');
        }
    }

    logout() {
        // eslint-disable-next-line no-null/no-null, unicorn/no-null
        this.base64token = null;
        localStorage.removeItem('base64token');
        localStorage.removeItem('username');
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.router.navigate(['/home']);
    }
}
