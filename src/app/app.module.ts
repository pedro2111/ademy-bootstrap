import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Desafio1Component } from './desafio1/desafio1.component';
import { AulasComponent } from './aulas/aulas.component';

@NgModule({
  declarations: [
    AppComponent,
    Desafio1Component,
    AulasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
