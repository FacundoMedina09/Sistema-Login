import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  username: string = "";
  password: string = "";
  confirmarPassword: string = "";

  constructor(private toastr: ToastrService, private _userService: UserService, private router: Router){}

  ngOnInit(): void{
  }

  agregarUsuario(){//Metodo con el que agregamos un usuario

    //Validamos que el usuario ingrese los datos
    if(this.username == "" || this.password == "" || this.confirmarPassword == "" ){
      this.toastr.error("Todos los campos son obligatorios","Error");
      return;
    }

    //Validamos que las contraseñas sean iguales
    if(this.password != this.confirmarPassword){
      this.toastr.error("Las contraseñas deben ser iguales","Error");
      return;
    }

    //Creamos el objeto
    const user: User={
      username: this.username,
      password: this.password
    }

    this._userService.registro(user).subscribe({
      next: (v) =>{
        this.toastr.success(`El Usuario ${this.username} registrado exitosamente`,"Usuario registrado");
        this.router.navigate(['/login']) //Una vez registrado, enviamos al login
      },
      error: (event: HttpErrorResponse) =>{//Si ocurre un error inesperado: Se avisa del error
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
