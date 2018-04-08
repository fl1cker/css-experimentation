import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleCssComponent } from './simple-css/simple-css.component';
import { AdvancedCssComponent } from './advanced-css/advanced-css.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RadialGradientsComponent } from './radial-gradients/radial-gradients.component';
import { PuppyFinderComponent } from './mock-websites/puppy-finder/puppy-finder.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleCssComponent,
    AdvancedCssComponent,
    DashboardComponent,
    RadialGradientsComponent,
    PuppyFinderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
