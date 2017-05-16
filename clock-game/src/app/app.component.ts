import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  guess: number = AppComponent.getRandom();
  clock = Observable
    .interval(1000)
    .map(()=> new Date());



  static getRandom() {
    const randHour =  Math.floor(Math.random() * (24 - 1) + 1);
    const randTime = Math.random() >= 0.5;
    const minutes = randTime ? 0 : 30;
    return new Date().setHours(randHour, minutes , 0);
  }
}
