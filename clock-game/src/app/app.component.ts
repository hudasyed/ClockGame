import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: number = Date.now();
  guess: number = this.getRandom();

  getRandom()
  {
    const randHour =  Math.floor(Math.random() * (24 - 1) + 1);
    const randTime = Math.random() >= 0.5;
    const minutes = randTime ? 0 : 30;

    return new Date().setHours(randHour, minutes , 0);
  }
}
