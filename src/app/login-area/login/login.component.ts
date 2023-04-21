import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) {}

  blad: string = '';

  form = new FormGroup({
    login: new FormControl('', Validators.required),
    haslo: new FormControl('', Validators.required)
  });

  zaloguj() {
    console.log(this.form.value);
    if (!this.form.valid) {
      this.blad = 'Uzupełnij oba pola.';
      return;
    }

    if (this.loginService.zaloguj(this.form.value.login!, this.form.value.haslo!) === false) {
      this.blad = 'Login lub hasło jest nieprawidłowe.';
      return;
    }

    this.router.navigateByUrl('/');
  }

}
