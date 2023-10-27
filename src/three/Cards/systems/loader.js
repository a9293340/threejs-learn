import TWEEN from "three/examples/jsm/libs/tween.module";

const loader = (camera) => {
	new TWEEN.Tween(camera.position.set(10, 10, 80))
		.to({ x: 5, y: 5, z: 80 }, 6000)
		.easing(TWEEN.Easing.Quadratic.InOut)
		.onComplete(function () {
			TWEEN.remove(this);
		})
		.start();
	window.scroll(0, 0);
};

export { loader };
