import { PerspectiveCamera } from "three";

function createCamera() {
	const camera = new PerspectiveCamera(
		70,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	// move the camera back so we can view the scene
	camera.position.set(-30, 50, 120);

	camera.tick = () => {
		// camera.position.z -= 0.05;
		// if (camera.position.z < 10) camera.position.z = 40;
	};
	return camera;
}

export { createCamera };
