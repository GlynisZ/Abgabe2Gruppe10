export interface Kunde {
  nachname: string,
  email: string,
  kategorie: number,
  newsletter: boolean,
  geburtsdatum: string,
  umsatz: Umsatz,
  homepage: string,
  geschlecht: string,
  familienstand: string,
  interessen: string[],
  adresse: Adresse,
  user: User
}

interface Umsatz {
  betrag: number,
  waehrung: string
}

interface Adresse {
  plz: string,
  ort: string
}

interface User {
  username: string,
  password: string
}
