import { MeshStandardMaterial, TextureLoader } from "three";

function createMaterials() {
	const textureLoader = new TextureLoader();
	const texture = textureLoader.load(
		"src/assets/pngimg.com - car_wheel_PNG23302.png"
	);

	const body = new MeshStandardMaterial({
		color: "firebrick",
		flatShading: true,
	});

	const detail = new MeshStandardMaterial({
		map: texture,
		// flatShading: true,
		fog: true,
	});

	const detail2 = new MeshStandardMaterial({
		color: "darkslategray",
		flatShading: true,
	});

	return { body, detail, detail2 };
}

export { createMaterials };
