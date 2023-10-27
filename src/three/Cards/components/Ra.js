import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MathUtils } from 'three';

const createRa = async () => {
  const loader = new GLTFLoader();

  const target = await loader.loadAsync('/models/yu-gi-oh_-_winged_dragon_of_ra.glb');
  const model = target.scene.children[0];
  model.scale.set(10, 10, 10);
  model.position.set(-3, 2.5, 0);
  model.rotation.z = MathUtils.degToRad(70);
  model.rotation.y = MathUtils.degToRad(45);
  model.tick = () => {};

  return model;
};

export { createRa };
