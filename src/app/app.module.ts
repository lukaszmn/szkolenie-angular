import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormatujZadanieDirective } from './formatujZadanie.directive';
import { LiczbaZadanComponent } from './liczba-zadan/liczba-zadan.component';
import { FiltrComponent } from './filtr/filtr.component';
import { LiczbaZadanPipe } from './liczba-zadan.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormatujZadanieDirective,
    LiczbaZadanComponent,
    FiltrComponent,
    LiczbaZadanPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
