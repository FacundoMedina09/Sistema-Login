import { Component } from '@angular/core';

import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import * as tsparticlesSlim from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


@Component({
  selector: 'app-particulas',   //Nombre por el cual vamos a invocar nuestras particulas
  templateUrl: './particulas.html',//Cargamos nuestro html
  styleUrls: ['./particulas.css']   //cargamos css
})
export class Particulas {

  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
      background: {
          color: {
              value: "#000000",
          },
      },
      fpsLimit: 60,
      interactivity: {
          events: {
              onClick: {
                  enable: false,
                  mode: ClickMode.push,
              },
              onHover: {
                  enable: false,
                  mode: HoverMode.repulse,
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: "#FF2E63",
          },
          links: {
              color: "#FF2E63",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 0.5,
          },
          move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                  default: OutMode.bounce,
              },
              random: false,
              speed: 1,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 120,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
  };

  particlesLoaded(container: Container): void {
  }

  async particlesInit(engine: Engine): Promise<void> {

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await tsparticlesSlim.loadSlim(engine);
  }


}
