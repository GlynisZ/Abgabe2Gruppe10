/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../../backend.service';
import { DatePipe } from '@angular/common';
import { Kunde } from '../../models/kunde';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
    anlegenForm: FormGroup;

    // eslint-disable-next-line max-params
    constructor(
        private readonly fb: FormBuilder,
        private readonly datePipe: DatePipe,
        private readonly backendService: BackendService,
        private readonly snackBar: MatSnackBar,
    ) {
        this.createForm();
    }

    private createForm() {
        this.anlegenForm = this.fb.group({
            nachname: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.pattern('[A-Z][a-z]+'),
                ]),
            ],
            email: [
                '',
                Validators.compose([Validators.required, Validators.email]),
            ],
            geburtsdatum: ['', Validators.required],
            geschlecht: ['', Validators.required],
            familienstand: ['', Validators.required],
            interesseSport: [false],
            interesseLesen: [false],
            interesseReisen: [false],
            plz: ['', Validators.required],
            ort: ['', Validators.required],
            benutzername: ['', Validators.required],
            passwort: ['', Validators.required],
        });
    }

    // eslint-disable-next-line max-lines-per-function
    async anlegen() {
        // Markiere leere Pflichtfelder als fehlend
        Object.keys(this.anlegenForm.controls).forEach(field => {
            const control = this.anlegenForm.get(field);
            control.markAsTouched({ onlySelf: true });
        });

        // abbrechen, wenn das Formular invalide ist
        if (!this.anlegenForm.valid) {
            return;
        }

        // interessen in string-array mappen
        let interessen: string[] = [];
        if (this.anlegenForm.controls.interesseSport.value) {
            interessen = [...interessen, 'S'];
        }
        if (this.anlegenForm.controls.interesseLesen.value) {
            interessen = [...interessen, 'L'];
        }
        if (this.anlegenForm.controls.interesseReisen.value) {
            interessen = [...interessen, 'R'];
        }

        // Datum in String formatieren
        const geburtsdatum: Date = this.anlegenForm.controls.geburtsdatum.value;
        const datum = this.datePipe.transform(geburtsdatum, 'yyyy-MM-dd');

        // Kunde zum übertragen ans backend erstellen
        const kunde: Kunde = {
            nachname: this.anlegenForm.controls.nachname.value,
            email: this.anlegenForm.controls.email.value,
            kategorie: 1,
            newsletter: true,
            geburtsdatum: datum,
            umsatz: {
                betrag: 0,
                waehrung: 'EUR',
            },
            homepage: 'https://www.test.de',
            geschlecht: this.anlegenForm.controls.geschlecht.value,
            familienstand: this.anlegenForm.controls.familienstand.value,
            interessen,
            adresse: {
                plz: this.anlegenForm.controls.plz.value,
                ort: this.anlegenForm.controls.ort.value,
            },
            user: {
                username: this.anlegenForm.controls.benutzername.value,
                password: this.anlegenForm.controls.passwort.value,
            },
        };
        const error = await this.backendService.kundeAnlegen(kunde);
        if (error.length > 0) {
            this.snackBar.open(error[0].message, 'OK', {
                duration: 5000,
                panelClass: ['blue-snackbar'],
            });
        }
        if (error.length === 0) {
            this.snackBar.open('Kunde angelegt', 'OK', {
                duration: 5000,
                panelClass: ['blue-snackbar'],
            });
            this.anlegenForm.reset();
        }
    }

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {
        //
    }
}
