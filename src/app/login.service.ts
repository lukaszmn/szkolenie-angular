import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) {}

  uzytkownik?: string;

  zaloguj(login: string, haslo: string): boolean {
    if (login === 'student' && haslo === 'hasło') {
      this.uzytkownik = login;
      return true;
    } else {
      this.uzytkownik = undefined;
      return false;
    }
  }

  wyloguj() {
    this.uzytkownik = undefined;
    this.router.navigateByUrl('/');
  }

}
