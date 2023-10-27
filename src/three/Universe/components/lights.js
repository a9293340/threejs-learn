import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
	const ambientLight = new HemisphereLight(0xdeedff, 1.5);
	const mainLight = new DirectionalLight("white", 8);

	mainLight.position.set(10, 5, 5);

	return { ambientLight, mainLight };
}

export { createLights };
