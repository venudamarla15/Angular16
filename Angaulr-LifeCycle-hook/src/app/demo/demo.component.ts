import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges,OnInit,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  title: string = 'Demo Component';
  @Input() message: string | undefined;
  @ViewChild('temp') tempPara!: ElementRef;
  @ContentChild('temp') paraContent!: ElementRef;

  constructor(){
    // console.log("Demo constructor will called !");

    // console.log(this.title);
    // console.log(this.message);
    
  }
  
  ngOnChanges(changes: SimpleChanges)  {
     console.log('ngOnChange hook called');
    // console.log(changes);
  }
  
  ngOnInit(){
    console.log('ngOnInitChange hook called');
    //  console.log(this.tempPara.nativeElement.innerHTML);
  }
  
  ngDoCheck(){
    console.log('ngDOCheck hook called!');
    // console.log('In ngDOcheck',this.paraContent);
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit hook called!');
    // console.log('In ngAfterContentInit',this.paraContent.nativeElement);
  }
  
  ngAfterContentChecked(){
    console.log('ngAfterContentCheck hook called!');
  //   console.log('In ngAfterContentCheck',this.tempPara);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit hook called!');
    //console.log('In ngAfterViewInit',this.tempPara);
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked hook called!');
    console.log('In ngAfterViewChecked',this.tempPara.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy hook called!');
  }
  
}
