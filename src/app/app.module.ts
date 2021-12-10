import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LrngButtonComponent } from './components/lrng-button/lrng-button.component';
import { LrngCardComponent } from './components/lrng-card/lrng-card.component';
import { LrngButton2Component } from './components/lrng-button2/lrng-button2.component';

@NgModule({
  declarations: [
    AppComponent,
    LrngButtonComponent,
    LrngCardComponent,
    LrngButton2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
