import { createCamera } from "@/three/Universe/components/camera.js";
import { createScene } from "@/three/Universe/components/scene.js";
import { createRenderer } from "@/three/Universe/systems/renderer.js";
import { Resizer } from "@/three/Universe/systems/Resizer.js";
import { createControls } from "./systems/control";

class Universe {
	#camera;
	#scene;
	#renderer;
	#loop;
	#controls;

	constructor(container) {
		this.#camera = createCamera();
		this.#scene = createScene();
		this.#renderer = createRenderer();
		container.append(this.#renderer.domElement);
		this.#controls = createControls(this.#camera, this.#renderer.domElement);

		const resizer = new Resizer(container, this.#camera, this.#renderer);
	}

	render() {
		this.#renderer.render(this.#scene, this.#camera);
	}

	start() {}

	stop() {}

	init() {}
}

export { Universe };
