import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { ErrorObserver, Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  

  constructor(private routes: Router, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token')
    
    if(token){
      request = request.clone({setHeaders: {Authorization: `Bearer ${token}`} })
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) =>{

        if (error.status == 401) {
          this.mensajeError(error)
          this.routes.navigate(['/login']);
        }
        return throwError(() => new Error())
      })
    );
  }

  mensajeError(event: HttpErrorResponse){//Funcion que captura el error inesperado y lo muestra.
    if (event.error.msg) {
      this.toastr.error(event.error.msg, "Error");  
    }
    else{
      this.toastr.error("Ocurrio un error.", "Error");  
    }
  }
}
