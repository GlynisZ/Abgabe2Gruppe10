// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Abgabe2';

    // eslint-disable-next-line no-useless-constructor
    constructor(private authService: AuthService) {
        //
    }

    ngOnInit(): void {
        const token = localStorage.getItem('base64token');
        if (token) {
            this.authService.base64token = token;
        }
    }
}
