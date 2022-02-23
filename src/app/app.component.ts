import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'planet' },
    { title: 'Tabla', url: 'tabla', icon: 'add' },
    { title: 'Num. Mayores', url: 'mayor', icon: 'add' },
  ];
  constructor() {}
}
