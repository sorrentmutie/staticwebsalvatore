import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Ciao, {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
