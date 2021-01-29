// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    benutzername = '';

    passwort = '';

    // eslint-disable-next-line no-useless-constructor
    constructor(private readonly authService: AuthService) {
        //
    }

    isLoggedIn() {
        // eslint-disable-next-line no-eq-null, eqeqeq, no-null/no-null, unicorn/no-null
        return this.authService.base64token != null;
    }

    async login() {
        await this.authService.login(this.benutzername, this.passwort);
    }

    logout() {
        this.authService.logout();
        this.benutzername = '';
        this.passwort = '';
    }

    ngOnInit(): void {
        this.benutzername = localStorage.getItem('username');
    }
}
