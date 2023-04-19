 export class ListaZadan {

  constructor(nazwa: string) {
    this.nazwa = nazwa;
  }

  nazwa: string;

  lista: Zadanie[] = [
    new Zadanie('Kupić telefon'),
    new Zadanie('Wymienić opony', true),
    new Zadanie('Wynieść śmieci'),
  ];

}

export class Zadanie {
  constructor(public nazwa: string, public zakonczone: boolean = false) {
  }
}
