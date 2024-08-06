import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //create event
  @Output()
  SearchTextChange: EventEmitter<string>  = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEl: ElementRef;
  
  onSearchTextChange(){
  
  }
  updateSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value;
    this.SearchTextChange.emit(this.searchText);
    //this.searchText = event.target.value;
  }
  
}

