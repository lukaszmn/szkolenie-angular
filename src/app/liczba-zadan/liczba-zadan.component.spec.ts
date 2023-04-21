import { TestBed } from '@angular/core/testing';
import { LiczbaZadanComponent } from './liczba-zadan.component';
import { LiczbaZadanPipe } from '../liczba-zadan.pipe';
import { Zadanie } from '../model/todoList';

describe('LiczbaZadanComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiczbaZadanComponent, LiczbaZadanPipe ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LiczbaZadanComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Brak zadań', () => {
    const fixture = TestBed.createComponent(LiczbaZadanComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    const actual = compiled.innerText;
    const expected = 'Brak zadań';

    expect(actual).toBe(expected);
  });

  it('1 zadanie', () => {
    const fixture = TestBed.createComponent(LiczbaZadanComponent);
    fixture.componentInstance.lista = [
      new Zadanie('a'),
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    const actual = compiled.innerText;
    const expected = '1 zadanie';

    expect(actual).toBe(expected);
  });

});
