import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css'],
})
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
export class AppComponent {


  title = 'YourPlace';
  constructor() { }
  ngOnInit() { }
  
}
