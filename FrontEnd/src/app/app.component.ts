import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ '..//styles.css']
})
export class AppComponent {

  title = 'FrontEnd';

  //Cuando la ruta sea "dashboard" vamos a eliminar el display:flex de los estilos.
  //Cuando la ruta sea otra. El display:flex va a agregarse

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.quitarFlexSegunRuta(this.router.url);
      }
    });
  }

  quitarFlexSegunRuta(url: string) {
   
    const element = this.elementRef.nativeElement.querySelector('html');
    if (element) {
      if (url.endsWith('dashboard')) {
       
        this.renderer.removeStyle(element, 'display');
      } else {
        
        this.renderer.setStyle(element, 'display', 'flex');
      }
    }
  }

}
