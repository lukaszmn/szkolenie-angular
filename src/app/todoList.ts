 export class ListaZadan {

  constructor(nazwa: string, dataUtworzenia: Date) {
    this.nazwa = nazwa;
    this.dataUtworzenia = dataUtworzenia;
  }

  nazwa: string;
  dataUtworzenia: Date;

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
