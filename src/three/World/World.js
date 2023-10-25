import { createCamera } from '@/three/World/components/camera.js';
import { createCube } from '@/three/World/components/cube.js';
import { createLights } from './components/lights';
import { createScene } from '@/three/World/components/scene.js';

import { createRenderer } from '@/three/World/systems/renderer.js';
import { Resizer } from '@/three/World/systems/Resizer.js';

class World {
  // 1. Create an instance of the World app
  #camera;
  #scene;
  #renderer;

  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    container.append(this.#renderer.domElement);

    const cube = createCube();
    const light = createLights();

    this.#scene.add(cube, light);

    const resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  // 2. Render the scene
  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export { World };
