import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.addClass(this.element.nativeElement,'highlight-product');
  }
  
  @HostListener('mouseout') onMouseOut(){
    this,this.renderer.removeClass(this.element.nativeElement,'highlight-product');
  }

  

}
