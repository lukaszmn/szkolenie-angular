import { LiczbaZadanPipe } from './liczba-zadan.pipe';
import { Zadanie } from './model/todoList';

describe('LiczbaZadanPipe', () => {

  it('Brak zadań', () => {
    const pipe = new LiczbaZadanPipe();
    const actual = pipe.transform([]);
    const expected = 'Brak zadań';

    expect(actual).toBe(expected);
  });

  it('1 zadanie', () => {
    const pipe = new LiczbaZadanPipe();
    const lista = [
      new Zadanie('a')
    ];
    const actual = pipe.transform(lista);
    const expected = '1 zadanie';

    expect(actual).toBe(expected);
  });

  it('2 zadania', () => {
    const pipe = new LiczbaZadanPipe();
    const lista = [
      new Zadanie('a'),
      new Zadanie('b'),
    ];
    const actual = pipe.transform(lista);
    const expected = '2 zadania';

    expect(actual).toBe(expected);
  });

});
