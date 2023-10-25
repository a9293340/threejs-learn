import { DirectionalLight } from 'three';

function createLights() {
  const light = new DirectionalLight('white', 6);

  light.position.set(100, 100, 100);

  return light;
}

export { createLights };
