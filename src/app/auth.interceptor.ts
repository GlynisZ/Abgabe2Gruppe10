/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Observable } from 'rxjs';

// eslint-disable-next-line @angular-eslint/use-injectable-provided-in
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    // eslint-disable-next-line no-useless-constructor
    constructor(private readonly authService: AuthService) {
        //
    }

    intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        // http anfragen abfangen, um authorization header hinzuzufügen
        // eslint-disable-next-line no-param-reassign
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${this.authService.base64token}`,
            },
        });

        return next.handle(req);
    }
}
