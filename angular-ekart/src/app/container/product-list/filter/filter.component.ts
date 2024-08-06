import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outofStock: number = 0;

  @Output()
  selectedFilterRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all';

  
  onSelectedFilterRadioButtonChange(){
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton);
  }
}
