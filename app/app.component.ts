import { Component } from '@angular/core'

interface Food {
  id: number,
  name: string,
  yummy: boolean
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
        </li>
      </ul>
    </div>
  `
})
 
export class AppComponent {
  foods: Food[] = [{
    id: 1,
    name: '🥑',
    yummy: true
  },{
    id: 2,
    name: '🍭',
    yummy: false
  },{
    id: 3,
    name: '🍦',
    yummy: false
  },{
    id: 4,
    name: '🌮',
    yummy: true
  },{
    id: 5,
    name: '🍒',
    yummy: true
  }]
}
