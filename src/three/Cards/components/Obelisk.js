import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const createObelisk = async () => {
  const loader = new GLTFLoader();

  const target = await loader.loadAsync('/models/uxrzone_obelisk_cleopatra.glb');
  const model = target.scene.children[0];
  model.scale.set(0.05, 0.05, 0.05);
  model.position.set(-2, 0, -5);
  model.tick = () => {};

  return model;
};

export { createObelisk };
