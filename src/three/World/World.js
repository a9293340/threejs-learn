import { createCamera } from "@/three/World/components/camera.js";
import { createCube } from "@/three/World/components/cube.js";
import { createMeshGroup } from "./components/meshGroup";
import { createLights } from "@/three/World/components/lights";
import { createScene } from "@/three/World/components/scene.js";
import {
	createAxesHelper,
	createGridHelper,
} from "@/three/World/systems/helper.js";
import { createRenderer } from "@/three/World/systems/renderer.js";
import { Resizer } from "@/three/World/systems/Resizer.js";
import { Loop } from "@/three/World/systems/Loop";
import { createControls } from "./systems/control";
import { Train } from "./components/Train/Train";
import { loadBirds } from "./components/bird/bird.js";

class World {
	// 1. Create an instance of the World app
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
		const cube = createCube();
		const meshGroup = createMeshGroup();
		const meshGroup1 = createMeshGroup();
		const meshGroup2 = createMeshGroup();
		const meshGroup3 = createMeshGroup();
		const train = new Train();
		train.scale.set(3, 3, 3);
		train.position.set(12, -5, 8);
		const { ambientLight, mainLight } = createLights();

		this.#loop.updatables.push(
			meshGroup,
			cube,
			this.#controls,
			this.#camera,
			train
		);
		cube.add(meshGroup);
		meshGroup.add(meshGroup1);
		meshGroup1.add(meshGroup2);
		meshGroup2.add(meshGroup3);
		this.#scene.add(
			ambientLight,
			mainLight,
			cube,
			train
			// createAxesHelper(),
			// createGridHelper()
		);
		const resizer = new Resizer(container, this.#camera, this.#renderer);
	}

	// 2. Render the scene
	render() {
		this.#renderer.render(this.#scene, this.#camera);
	}

	start() {
		this.#loop.start();
	}

	stop() {
		this.#loop.stop();
	}

	async init() {
		const { tokyo, parrot, flamingo, stork } = await loadBirds();

		this.#controls.target.copy(tokyo.position);

		this.#loop.updatables.push(tokyo, parrot, flamingo, stork);

		this.#scene.add(tokyo, parrot, flamingo, stork);
	}
}

export { World };
