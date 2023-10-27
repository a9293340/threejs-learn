import TWEEN from 'three/examples/jsm/libs/tween.module';

const createTween = camera => {
  console.log(camera.position);
  const tween = new TWEEN.Tween(camera.position)
    .to({ x: 2, y: 3, z: 7 }, 4000)
    .easing(TWEEN.Easing.Quadratic.InOut);
  const tween2 = new TWEEN.Tween(camera.rotation)
    .to({ y: Math.PI / 20 }, 2500)
    .easing(TWEEN.Easing.Quadratic.InOut);
  tween.chain(tween2);
  tween.start();

  return [tween, tween2];
};

export { createTween };
