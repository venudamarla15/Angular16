import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-LifeCycle-hook';
  inputVal: string = '';
  toDestroy: boolean = false;
  
  onBtnClicked(inputEl: HTMLInputElement){
    this.inputVal = inputEl.value;
  }
  constructor(){
    console.log("Hello from app constructor !");
  }
  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit hook of app component called!');
  //   //console.log('In ngAfterViewInit',this.tempPara);
  // }
  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked hook of app component called!');
  //   //console.log('In ngAfterViewInit',this.tempPara);
  // }
  destroyCOmponent(){
    this.toDestroy = !this.toDestroy;
  }
}
