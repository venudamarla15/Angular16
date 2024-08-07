import { Component } from '@angular/core';

@Component({
  selector: 'ng-container-demo',
  templateUrl: './ng-container-demo.component.html',
  styleUrls: ['./ng-container-demo.component.css']
})
export class NgContainerDemoComponent {

  toggle: Boolean = true;

  onToggle(){
    this.toggle = !this.toggle;
  }

}
