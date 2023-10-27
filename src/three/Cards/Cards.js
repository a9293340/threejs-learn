import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { createLights } from './components/lights';
import { Loop } from './systems/Loop';
import { createAxesHelper, createGridHelper } from '@/three/World/systems/helper.js';
import { createTween } from './components/tween.js';
import { createOsiris } from './components/Osiris.js';
import { createRa } from './components/Ra.js';
import { createObelisk } from './components/Obelisk.js';

class Cards {
  #camera;
  #scene;
  #renderer;
  #loop;
  #tween;

  constructor(container) {
    this.#camera = createCamera();
    this.#camera.position.set(0, 4, 0);
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#tween = createTween(this.#camera);
    const { dLight, fillLight } = createLights();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer, fillLight);
    container.append(this.#renderer.domElement);

    this.#loop.updatables.push(this.#camera);

    this.#scene.add(dLight, fillLight, createGridHelper());
    const resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }

  async init() {
    const osiris = await createOsiris();
    const ra = await createRa();
    const obelisk = await createObelisk();
    this.#loop.updatables.push(osiris, ra, obelisk);
    this.#scene.add(osiris, ra, obelisk);
  }
}

export { Cards };
