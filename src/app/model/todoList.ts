 export class ListaZadan {

  constructor(nazwa: string, dataUtworzenia: Date) {
    this.nazwa = nazwa;
    this.dataUtworzenia = dataUtworzenia;
    console.log(JSON.stringify(this, null, 2));
  }

  nazwa: string;
  dataUtworzenia: Date;

  lista: Zadanie[] = [];

}

export class Zadanie {
  constructor(public nazwa: string, public zakonczone: boolean = false) {
  }
}
