import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LrngButtonComponent } from './components/lrng-button/lrng-button.component';
import { LrngCardComponent } from './components/lrng-card/lrng-card.component';
import { LrngPageComponent } from './components/lrng-page/lrng-page.component';
import { LrngCard2Component } from './components/lrng-card2/lrng-card2.component';
import { LrngPage2Component } from './components/lrng-page2/lrng-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    LrngButtonComponent,
    LrngCardComponent,
    LrngPageComponent,
    LrngCard2Component,
    LrngPage2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
