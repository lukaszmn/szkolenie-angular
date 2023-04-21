import { Component, Input } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-naglowek',
  templateUrl: './naglowek.component.html',
  styleUrls: ['./naglowek.component.scss']
})
export class NaglowekComponent {

  @Input() nazwaZadania?: string;

  constructor(public loginService: LoginService) {}
}
