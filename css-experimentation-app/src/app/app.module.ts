import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleCssComponent } from './simple-css/simple-css.component';
import { AdvancedCssComponent } from './advanced-css/advanced-css.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleCssComponent,
    AdvancedCssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
