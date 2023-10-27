import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MathUtils } from 'three';

const createRa = async () => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('src/assets/models/draco/gltf/');
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);

  const target = await loader.loadAsync('src/assets/models/yu-gi-oh_-_winged_dragon_of_ra.glb');
  const model = target.scene.children[0];
  model.scale.set(10, 10, 10);
  model.position.set(-3, 2.5, 0);
  model.rotation.z = MathUtils.degToRad(70);
  model.rotation.y = MathUtils.degToRad(45);
  // model.rotation.x = -MathUtils.degToRad(30);
  model.tick = () => {};

  return model;
};

export { createRa };
