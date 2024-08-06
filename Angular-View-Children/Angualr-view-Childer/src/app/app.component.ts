import { QueryList } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angualr-view-Childer';

  @ViewChildren('inputEl') inputElements: QueryList<ElementRef>;

  fullName: string ='';
  
  show(){
    let name = '';
    this.inputElements.forEach((el) =>{
     name += el.nativeElement.value + ' ';
    })
    this.fullName = name.trim();

    
  }
}
