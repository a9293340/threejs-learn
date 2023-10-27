import { DirectionalLight, PointLight } from 'three';

function createLights() {
  // 直射光
  const dLight = new DirectionalLight(0xffffff, 0.8);
  dLight.position.set(-100, 0, -100);
  // 点光源
  const fillLight = new PointLight(0xffffff, 4, 4, 1);
  fillLight.position.set(5, 3, 1.8);

  return { dLight, fillLight };
}

export { createLights };
