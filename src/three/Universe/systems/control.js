import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
	const controls = new OrbitControls(camera, canvas);

	controls.enableDamping = true;

	controls.dampingFactor = 0.25; // 阻尼系數

	controls.tick = () => controls.update();

	return controls;
}

export { createControls };
