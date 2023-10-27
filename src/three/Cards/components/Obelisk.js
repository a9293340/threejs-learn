import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MathUtils } from 'three';

const createObelisk = async () => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('src/assets/models/draco/gltf/');
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);

  const target = await loader.loadAsync('src/assets/models/uxrzone_obelisk_cleopatra.glb');
  const model = target.scene.children[0];
  model.scale.set(0.05, 0.05, 0.05);
  model.position.set(-2, 0, -5);
  // model.rotation.z = MathUtils.degToRad(30);
  // model.rotation.y = MathUtils.degToRad(-50);
  // model.rotation.x = -MathUtils.degToRad(30);
  model.tick = () => {};

  return model;
};

export { createObelisk };
