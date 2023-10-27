import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { createLights } from "./components/lights";
import { Loop } from "./systems/Loop";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
	createAxesHelper,
	createGridHelper,
} from "@/three/World/systems/helper.js";
import TWEEN from "three/examples/jsm/libs/tween.module";
import { Clock } from "three";

class Cards {
	#camera;
	#scene;
	#renderer;
	#loop;
	#tween;

	constructor(container) {
		this.#camera = createCamera();
		this.#scene = createScene();
		this.#renderer = createRenderer();
		this.#tween = new TWEEN.Tween(this.#camera.position.set(0, 4, 2));
		this.#tween.to({ x: 0, y: 2.4, z: 5.8 }, 6000);
		this.#tween.easing(TWEEN.Easing.Quadratic.InOut);
		this.#tween.start();
		const { dLight, fillLight } = createLights();
		this.#loop = new Loop(
			this.#camera,
			this.#scene,
			this.#renderer,
			this.#tween,
			{ dLight, fillLight }
		);
		container.append(this.#renderer.domElement);

		this.#loop.updatables.push(this.#camera);

		this.#scene.add(dLight, fillLight, createGridHelper());
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

	async init() {
		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath("src/assets/models/draco/gltf/");
		const loader = new GLTFLoader();
		loader.setDRACOLoader(dracoLoader);

		const target = await loader.loadAsync(
			"src/assets/models/ibex_statue_scan_-_berlin_-_tierpark.glb"
		);
		const model = target.scene.children[0];
		model.scale.set(1, 1, 1);
		model.position.set(0, 2.5, 0);
		model.tick = () => {};
		this.#loop.updatables.push(model);
		this.#scene.add(model);
	}
}

export { Cards };
