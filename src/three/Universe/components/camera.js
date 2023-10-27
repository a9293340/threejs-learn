import { PerspectiveCamera } from "three";

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

function createCamera() {
	const camera = new PerspectiveCamera(
		700,
		window.innerWidth / window.innerHeight,
		0.1,
		10000
	);
	// move the camera back so we can view the scene
	camera.position.set(10, 50, 240);

	camera.tick = () => {
		// camera.position.z -= 0.05;
		// if (camera.position.z < 10) camera.position.z = 40;
	};
	return camera;
}

export { createCamera };
