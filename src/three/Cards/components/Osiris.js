import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MathUtils } from 'three';

const createOsiris = async () => {
  const loader = new GLTFLoader();

  const target = await loader.loadAsync('/models/yu-gi-oh_slifer_the_sky_dragon_osiris.glb');
  const model = target.scene.children[0];
  model.scale.set(0.002, 0.002, 0.002);
  model.position.set(0, 2.5, 0);
  model.rotation.z = MathUtils.degToRad(30);
  model.rotation.y = MathUtils.degToRad(-50);
  model.rotation.x = -MathUtils.degToRad(30);
  model.tick = () => {};

  return model;
};

export { createOsiris };
