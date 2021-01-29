export interface Kunde {
    nachname: string;
    email: string;
    kategorie: number;
    newsletter: boolean;
    geburtsdatum: string;
    // eslint-disable-next-line no-use-before-define
    umsatz: Umsatz;
    homepage: string;
    geschlecht: string;
    familienstand: string;
    interessen: string[];
    // eslint-disable-next-line no-use-before-define
    adresse: Adresse;
    // eslint-disable-next-line no-use-before-define
    user: User;
}

interface Umsatz {
    betrag: number;
    waehrung: string;
}

interface Adresse {
    plz: string;
    ort: string;
}

interface User {
    username: string;
    password: string;
}
