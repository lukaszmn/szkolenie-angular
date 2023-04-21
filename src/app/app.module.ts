import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormatujZadanieDirective } from './formatujZadanie.directive';
import { LiczbaZadanComponent } from './liczba-zadan/liczba-zadan.component';
import { FiltrComponent } from './filtr/filtr.component';
import { LiczbaZadanPipe } from './liczba-zadan.pipe';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { ListaZadanComponent } from './lista-zadan/lista-zadan.component';
import { ListaZadanService } from './lista-zadan.service';
import { EkranListaComponent } from './ekran-lista/ekran-lista.component';
import { ModelModule } from './model/model.module';

@NgModule({
  declarations: [
    AppComponent,
    FormatujZadanieDirective,
    LiczbaZadanComponent,
    FiltrComponent,
    LiczbaZadanPipe,
    NaglowekComponent,
    ListaZadanComponent,
    EkranListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModelModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' },
    ListaZadanService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
