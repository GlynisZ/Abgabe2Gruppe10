/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Kunde } from '../../models/kunde';
import { KundeSuchen } from '../../models/kunde-suchen';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    displayedColumns: string[] = [
        'nachname',
        'geschlecht',
        'familienstand',
        'interessen',
        'umsatz',
    ];

    kunden = [];

    nachname = '';

    geschlecht = 'K';

    familienstand = 'K';

    interesseSport = false;

    interesseLesen = false;

    interesseReisen = false;

    // eslint-disable-next-line no-useless-constructor
    constructor(
        private readonly backendService: BackendService,
        private readonly snackBar: MatSnackBar,
    ) {
        //
    }

    async suchen() {
        // interessen in String mappen
        let interessen: string[] = [];
        if (this.interesseSport) {
            interessen = [...interessen, 'S'];
        }
        if (this.interesseLesen) {
            interessen = [...interessen, 'L'];
        }
        if (this.interesseReisen) {
            interessen = [...interessen, 'R'];
        }

        // Kunde zum Übertragen ans Backend anlegen
        const kunde: KundeSuchen = {
            nachname: this.nachname,
            geschlecht: this.geschlecht === 'K' ? '' : this.geschlecht,
            familienstand: this.familienstand === 'K' ? '' : this.familienstand,
            interessen,
        };

        this.kunden = await this.backendService.kundeSuchen(kunde);
        this.transformKundenListe(this.kunden);

        if (this.kunden.length === 0) {
            this.snackBar.open('Kein Ergebnis', 'OK', {
                duration: 5000,
                panelClass: ['blue-snackbar'],
            });
        } else if (this.kunden.length === 1) {
            this.snackBar.open('Ein Ergebnis', 'OK', {
                duration: 5000,
                panelClass: ['blue-snackbar'],
            });
        } else {
            this.snackBar.open(`${this.kunden.length} Ergebnisse`, 'OK', {
                duration: 5000,
                panelClass: ['blue-snackbar'],
            });
        }
    }

    transformKundenListe(kunden: Kunde[]) {
        const genderMap = {
            W: 'Weiblich',
            M: 'Männlich',
            D: 'Divers',
        };
        kunden.forEach(
            // eslint-disable-next-line no-extra-parens
            kunde => (kunde.geschlecht = genderMap[kunde.geschlecht]),
        );
        const familienStandMap = {
            VH: 'Verheiratet',
            G: 'Geschieden',
            L: 'Ledig',
            VW: 'Verwitwet',
        };
        kunden.forEach(
            kunde =>
                // eslint-disable-next-line no-extra-parens
                (kunde.familienstand = familienStandMap[kunde.familienstand]),
        );
        const interessenMap = {
            L: 'Lesen',
            S: 'Schreiben',
            R: 'Reisen',
        };
        kunden
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            .filter(kunde => kunde.interessen)
            .forEach(
                kunde =>
                    // eslint-disable-next-line no-extra-parens
                    (kunde.interessen = kunde.interessen.map(
                        interesse => interessenMap[interesse],
                    )),
            );
    }

    async ngOnInit() {
        this.kunden = await this.backendService.kundeSuchen({});
        this.transformKundenListe(this.kunden);
    }
}
