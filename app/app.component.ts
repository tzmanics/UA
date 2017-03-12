import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">>
      <h1>{{ title }}</h1>
      <input
        type="text"
        [value]="name"
        (input)="handleInput($event)"  
      >
      <button (click)="handleButton($event)">
        Toshify
      </button>
      <div>{{ name }}</div>
    </div>
  `
})
 
export class AppComponent {
  name: string = 'Toshi Magoshi Manicsic'
  handleInput(event: any) {
    this.name = event.target.value
  }
  handleButton(event: any) {
    this.name = 'Toshi'
  }
  constructor() {
    this.title = 'Tosh Magosh'
  }
}
