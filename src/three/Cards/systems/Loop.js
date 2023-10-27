import { Clock } from 'three';
import TWEEN from 'three/examples/jsm/libs/tween.module';

const clock = new Clock();
let previousTime = 0;
let cursor = { x: 0, y: 0 };

document.addEventListener(
  'mousemove',
  event => {
    event.preventDefault();
    cursor.x = event.clientX / window.innerWidth - 0.5;
    cursor.y = event.clientY / window.innerHeight - 0.5;
  },
  false,
);

class Loop {
  constructor(camera, scene, renderer, light) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.light = light;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      TWEEN.update();
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();
    for (const object of this.updatables) {
      object.tick(delta);
    }
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;
    const parallaxY = cursor.y;
    const parallaxX = cursor.x;
    this.light.position.y -= (parallaxY * 9 + this.light.position.y - 2) * deltaTime;
    this.light.position.x += (parallaxX * 8 - this.light.position.x) * 2 * deltaTime;
    this.camera.position.x += (parallaxX / 3 - this.camera.position.x) * deltaTime;
  }
}

export { Loop };
