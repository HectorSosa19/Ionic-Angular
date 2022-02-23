import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {
  n1: any;
  calculo: any;
  tabla = [];
  constructor() { }
  ngOnInit() {
  }
  generar(){
    this.tabla = [];
    for (let i = 0; i <= 14; i++) {
      this.calculo = `${this.n1} x ${i}= ${this.n1*i}`;
      this.tabla.push({numero : this.calculo});
    }
  }

}
