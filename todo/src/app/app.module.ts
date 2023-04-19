import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LiczbaZadanPipe } from './liczba-zadan.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LiczbaZadanPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pl-PL' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
