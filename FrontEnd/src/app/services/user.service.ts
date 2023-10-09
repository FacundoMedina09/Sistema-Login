import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private myAppUrl: string; //Inicializamos variable de nuestra app
  private myApiUrl: string; //Inicializamos variable de nuestra api

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint; //Variable de nuestra app = Puerto de BackEnd
    this.myApiUrl = 'api/users';          //Variable de nuestra api = Ruta de usuarios
  }

  registro(user: User): Observable<any>{  //Metodo con el que vamos a registrar a un usuario
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user)
  }

  logIn(user: User): Observable<string>{  //Metodo con el que vamos a iniciar sesion de un usuario
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, user);
  }

}
