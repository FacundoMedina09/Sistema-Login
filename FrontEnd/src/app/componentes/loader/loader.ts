import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-Loader',   //Nombre por el cual vamos a invocar nuestras particulas
    templateUrl: './loader.html',//Cargamos nuestro html
    styleUrls: ['./loader.css']   //cargamos css
})

export class Loader implements OnInit{

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
        setTimeout(() => {
          const contenedorLoader = document.getElementById('contenedor-loader');
          if (contenedorLoader) {
            this.renderer.setStyle(contenedorLoader, 'opacity', '0');
            this.renderer.setStyle(contenedorLoader, 'visibility', 'hidden');
          }
        }, 2000);
      }
}
