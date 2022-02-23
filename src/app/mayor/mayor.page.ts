import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor',
  templateUrl: './mayor.page.html',
  styleUrls: ['./mayor.page.scss'],
})
export class MayorPage implements OnInit {
  n1: any;
  n2: any;
  resultado:any;
  constructor() { }

  ngOnInit() {
  }
  comparar(){
    this.n1 = parseInt(this.n1,10);
    this.n2 = parseInt(this.n2,10);

    if (this.n1 > this.n2){
      this.resultado =`${this.n1} es mayor que ${this.n2}`;
    }else if (this.n1 === this.n2){
      this.resultado =`${this.n1} & ${this.n2} son iguales`;
    }else {
      this.resultado =`${this.n2} es mayor que ${this.n1}`;
    }
  }
}
