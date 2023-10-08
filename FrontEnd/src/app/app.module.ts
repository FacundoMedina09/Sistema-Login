import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgParticlesModule } from "ng-particles";
import { Particulas } from './componentes/particles/particulas';
import { Loader } from './componentes/loader/loader';

@NgModule({
  declarations: [
    AppComponent,
    Loader,         //Declaramos nuestro loader para poder utilizarlo
    Particulas,     //Declaramos nuestras particulas para poder utilizarlas
  ],
  imports: [
    BrowserModule,
    NgParticlesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
