import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgTemplateDemoComponent } from './ng-template-demo/ng-template-demo.component';
import { NgContainerDemoComponent } from './ng-container-demo/ng-container-demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTemplateDemoComponent,
    NgContainerDemoComponent,
    ParentComponent,
    ChildComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
