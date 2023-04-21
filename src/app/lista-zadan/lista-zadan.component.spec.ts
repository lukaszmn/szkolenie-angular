import { TestBed } from '@angular/core/testing';
import { ListaZadanComponent } from './lista-zadan.component';
import { Zadanie } from '../model/todoList';
import { FormatujZadanieDirective } from '../formatujZadanie.directive';
import { FormsModule } from '@angular/forms';

describe('ListaZadanComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaZadanComponent, FormatujZadanieDirective ],
      imports: [ FormsModule ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ListaZadanComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('shows 3 rows for 2 tasks', () => {
    const fixture = TestBed.createComponent(ListaZadanComponent);
    fixture.componentInstance.lista = [
      new Zadanie('a'),
      new Zadanie('b'),
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const actual = compiled.querySelectorAll('tr').length;
    const expected = 3;

    expect(actual).toBe(expected);
  });

  it('shows TAK for completed task', () => {
    const fixture = TestBed.createComponent(ListaZadanComponent);
    fixture.componentInstance.lista = [
      new Zadanie('a'),
      new Zadanie('b', true),
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const actual = compiled.querySelectorAll('tr')[2].querySelector('[data-testid=zakonczone]')?.textContent?.trim();
    const expected = 'TAK';

    expect(actual).toBe(expected);
  });

  // dodane słowo ASYNC
  it('shows TAK for completed task', async () => {
    const fixture = TestBed.createComponent(ListaZadanComponent);
    fixture.componentInstance.lista = [
      new Zadanie('a'),
      new Zadanie('b'),
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    const indeks = 1;

    // sprawdzenie przed testem

    expect(fixture.componentInstance.lista[indeks].zakonczone).toBe(false);

    const zakonczone0 = compiled.querySelectorAll('[data-testid=zakonczone]')[indeks].textContent!.trim();
    expect(zakonczone0).toBe('');

    // klik

    const checkbox = compiled.querySelectorAll('[data-testid=zakonczone]')[indeks].querySelector('input')!;
    checkbox.click();
    fixture.detectChanges();

    // TO WYWOŁANIE DODANE (wymaga ASYNC powyżej)
    // Z opisu: This can be used to resume testing after events have triggered asynchronous activity or asynchronous change detection
    await fixture.whenStable();

    // sprawdzenie po teście
    expect(fixture.componentInstance.lista[indeks].zakonczone).toBe(true);

    const zakonczone = compiled.querySelectorAll('[data-testid=zakonczone]')[indeks].textContent!.trim();
    expect(zakonczone).toBe('TAK');
  });

});
