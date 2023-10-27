import { Scene, Fog, Color } from "three";

function createScene() {
	const scene = new Scene();

	scene.background = new Color(0x1a1a1a);
	scene.fog = new Fog(0x1a1a1a, 1, 1000);

	return scene;
}

export { createScene };
