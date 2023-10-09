import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private toastr: ToastrService, private _userService: UserService, private router: Router){}


  ngOnInit(): void{
  }

  login(){
    //Validamos que el usuario ingrese los datos
    if(this.username == "" || this.password == "" ){
      this.toastr.error("Todos los campos son obligatorios","Error");
      return;
    }

    //Creamos el body 
    const user: User={
      username: this.username,
      password: this.password
    }

    this._userService.logIn(user).subscribe({
      next: (data) =>{
        this.toastr.success(`Accediendo exitosamente`,"Sesion iniciada");
        this.router.navigate(['/dashboard']) //Una vez registrado, enviamos al dashboard
        localStorage.setItem('token',data)
      },error: (event: HttpErrorResponse) =>{//Si ocurre un error inesperado: Se avisa del error
        this.mensajeError(event);
      },
      
    })

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
