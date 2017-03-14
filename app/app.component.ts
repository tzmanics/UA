import { Component } from '@angular/core'

interface Food {
  id: number,
  name: string,
  yummy: boolean,
  eaten: number | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h2> Foods </h2>
      <ul>
        <li *ngFor="let food of foods; let i = index;">
          <span
            class="is-yummy"
            [ngStyle]="{
              backgroundColor: (food.yummy ? 'lightgreen' : 'pink')
            }" ></span>
          {{ i }}: {{ food.name }}
          <p>{{ food | json }}
          <div class="date">
            Date Eaten:
            {{ food.eaten ? (food.eaten | date: 'yMMMdd' | uppercase) : 'Need to eat!' }}
          </div>
        </li>
      </ul>
    </div>
  `
})
 
export class AppComponent {
  foods: Food[] = [{
    id: 1,
    name: '🥑',
    yummy: true,
    eaten: 1490742000000
  },{
    id: 2,
    name: '🍭',
    yummy: false,
    eaten: null
  },{
    id: 3,
    name: '🍦',
    yummy: false,
    eaten: 1490742000000
  },{
    id: 4,
    name: '🌮',
    yummy: true,
    eaten: 1490742000000
  },{
    id: 5,
    name: '🍒',
    yummy: true,
    eaten: null
  }]
}
