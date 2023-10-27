import { createCamera } from "@/three/Universe/components/camera.js";
import { createScene } from "@/three/Universe/components/scene.js";
import { createRenderer } from "@/three/Universe/systems/renderer.js";
import { Resizer } from "@/three/Universe/systems/Resizer.js";
import { createControls } from "./systems/control";
import { createLights } from "./components/lights";
import { createPlanet } from "./components/planet";
import { createRing } from "./components/ring";
import { createSatellite } from "./components/satellite";
import { createStarGroup } from "./components/starGroup";
import { Loop } from "./systems/Loop";

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
		this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
		container.append(this.#renderer.domElement);
		this.#controls = createControls(this.#camera, this.#renderer.domElement);

		const { ambientLight } = createLights();
		const planet = createPlanet();
		const ring = createRing();
		const satellite = createSatellite();
		const stars = createStarGroup();

		this.#loop.updatables.push(
			this.#controls,
			this.#camera,
			planet,
			ring,
			satellite,
			stars
		);

		this.#scene.add(ambientLight, planet, ring, satellite, stars);

		const resizer = new Resizer(container, this.#camera, this.#renderer);
	}

	render() {
		this.#renderer.render(this.#scene, this.#camera);
	}

	start() {
		this.#loop.start();
	}

	stop() {
		this.#loop.stop();
	}

	init() {}
}

export { Universe };
