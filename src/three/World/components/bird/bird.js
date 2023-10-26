import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { MathUtils } from "three";
import { setupModel } from "./setupModel.js";

async function loadBirds() {
	const dracoLoader = new DRACOLoader();
	dracoLoader.setDecoderPath("src/assets/models/draco/gltf/");

	const loader = new GLTFLoader();
	loader.setDRACOLoader(dracoLoader);
	const [parrotData, flamingoData, storkData, tokyoData] = await Promise.all([
		loader.loadAsync("src/assets/models/Parrot.glb"),
		loader.loadAsync("src/assets/models/Flamingo.glb"),
		loader.loadAsync("src/assets/models/Stork.glb"),
		loader.loadAsync("src/assets/models/LittlestTokyo.glb"),
	]);

	console.log("Squaaawk!", tokyoData);

	const parrot = setupModel(parrotData);
	const flamingo = setupModel(flamingoData);
	const stork = setupModel(storkData);
	const tokyo = setupModel(tokyoData);

	tokyo.scale.set(0.1, 0.1, 0.1);
	tokyo.position.set(-15, 13, -10);

	parrot.position.set(-34, 35, 5);
	parrot.scale.set(5, 5, 5);
	parrot.rotation.x = MathUtils.degToRad(75);
	flamingo.position.set(-26, 41, -11);
	flamingo.scale.set(5, 5, 5);
	flamingo.rotation.y = MathUtils.degToRad(49);
	stork.position.set(-39, 52, 9);
	stork.scale.set(5, 5, 5);
	stork.rotation.z = MathUtils.degToRad(25);

	return { tokyo, parrot, flamingo, stork };
}

export { loadBirds };
