import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgTemplateDemoComponent } from './ng-template-demo/ng-template-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTemplateDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
