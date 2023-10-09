import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//Modulos
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//Componentes
import { NgParticlesModule } from "ng-particles";
import { Particulas } from './componentes/particles/particulas';
import { Loader } from './componentes/loader/loader';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AppRoutingModule } from './app.routing.module';
import { AddTokenInterceptor } from './utils/add-token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    Loader,         //Declaramos nuestro loader para poder utilizarlo
    Particulas, LoginComponent, RegistroComponent, DashboardComponent, NavbarComponent,     //Declaramos nuestras particulas para poder utilizarlas
  ],
  imports: [
    BrowserModule,
    NgParticlesModule ,
    AppRoutingModule,  //Declaramos el enrutamiento para utilizarlo
    HttpClientModule,  //Declaramos el modulos para enviar y recibir consultas
    FormsModule,        //Declaramos para utilizar ngModul
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({  // ToastrModule para dar msj de error o msj correcto
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
