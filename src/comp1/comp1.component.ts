import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'comp-1',
  templateUrl: './comp1.component.html'
})
export class Comp1Component {
  public name:string = "a component (comp-1)";
}