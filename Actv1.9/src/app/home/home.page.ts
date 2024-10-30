import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num: number | null = null;
  esPar: boolean | null = null;

  constructor() {}

  verificaParidad() {
    if (this.num !== null) {
      this.esPar = this.num % 2 === 0;
    }
  }

  reinicia() {
    this.num = null;
    this.esPar = null;
  }
}
