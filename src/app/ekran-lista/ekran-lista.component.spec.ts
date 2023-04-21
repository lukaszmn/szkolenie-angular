import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkranListaComponent } from './ekran-lista.component';

describe('EkranListaComponent', () => {
  let component: EkranListaComponent;
  let fixture: ComponentFixture<EkranListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkranListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkranListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
