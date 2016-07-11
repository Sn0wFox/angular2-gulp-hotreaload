import {Component} from '@angular/core';
import {Comp1Component} from '../comp1/comp1.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  directives: [Comp1Component]
})
export class AppComponent {
  public hello:string = "Hello my hot reloading App !";
}