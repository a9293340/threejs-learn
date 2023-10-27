import { PerspectiveCamera } from "three";

function createCamera() {
	const camera = new PerspectiveCamera(
		35,
		window.innerWidth / window.innerHeight,
		1,
		1000
	);

	camera.tick = () => {
		// camera.position.z -= 0.05;
		// if (camera.position.z < 10) camera.position.z = 40;
	};
	return camera;
}

export { createCamera };
