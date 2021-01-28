/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kunde } from './models/kunde';
import { KundeSuchen } from './models/kunde-suchen';

interface KundeList {
    kundeList: Kunde[];
}
interface KundenListResponse {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _embedded: KundeList;
}

@Injectable({
    providedIn: 'root',
})
export class BackendService {
    // eslint-disable-next-line no-useless-constructor
    constructor(private readonly http: HttpClient) {
        //
    }

    async login(): Promise<boolean> {
        try {
            await this.http
                .get<unknown>('http://localhost:4200/kunden')
                // eslint-disable-next-line rxjs/no-topromise
                .toPromise();
            console.log('erfolgreich');
            return true;
        } catch {
            console.log('Nicht erfolgreich');
            return false;
        }
    }

    async kundeSuchen(kunde: KundeSuchen) {
        const params = new HttpParams({
            fromString: this.toQueryString(kunde),
        });
        let kundenListe: Kunde[];
        try {
            // eslint-disable-next-line no-underscore-dangle
            kundenListe = (
                await this.http
                    .get<KundenListResponse>('http://localhost:4200/kunden', {
                        params,
                    })
                    // eslint-disable-next-line rxjs/no-topromise
                    .toPromise()
            )._embedded.kundeList;
            return kundenListe;
        } catch {
            return [];
        }
    }

    async kundeAnlegen(kunde: Kunde) {
        try {
            await this.http
                .post('http://localhost:4200/kunden', kunde)
                // eslint-disable-next-line rxjs/no-topromise
                .toPromise();
            return [];
            // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch
        } catch (err) {
            return err.error;
        }
    }

    toQueryString(kunde: KundeSuchen) {
        let toQuery = '';
        if (kunde.nachname) {
            toQuery += `nachname=${kunde.nachname}&`;
        }
        if (kunde.geschlecht) {
            toQuery += `geschlecht=${kunde.geschlecht}&`;
        }
        if (kunde.familienstand) {
            toQuery += `familienstand=${kunde.familienstand}&`;
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (kunde.interessen) {
            kunde.interessen.forEach(interesse => {
                toQuery += `interessen=${interesse}&`;
            });
        }
        toQuery = toQuery.slice(0, -1);
        return toQuery;
    }
}
