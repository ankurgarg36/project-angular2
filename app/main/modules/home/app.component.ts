import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <header-component></header-component>
    <div class="main">
    <div class="content">
    <div class="ic"></div>
    <router-outlet></router-outlet>
    </div>
    <bottom-block></bottom-block>
    </div>
    <footer-component></footer-component>
  `,
})
export class AppComponent {
  title = 'Tour of Heroes';
}
