import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuloDeColaboradoresComponent } from './modulo-de-colaboradores/modulo-de-colaboradores.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuloDeColaboradoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
