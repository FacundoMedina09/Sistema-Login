import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private myAppUrl: string; //Inicializamos variable de nuestra app
  private myApiUrl: string; //Inicializamos variable de nuestra api

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint; //Variable de nuestra app = Puerto de BackEnd
    this.myApiUrl = 'api/products';          //Variable de nuestra api = Ruta de usuarios
  }

  getProducts(): Observable<Products[]>{  //Metodo con el que vamos a mostrar productos
    
    /*const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}` );
    return this.http.get<Products[]>(`${this.myAppUrl}${this.myApiUrl}`, {headers: headers})*/
    return this.http.get<Products[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

}

