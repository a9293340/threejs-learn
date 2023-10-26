import {
	SphereGeometry,
	Mesh,
	MeshStandardMaterial,
	MathUtils,
	TextureLoader,
} from "three";
import { createTexture, createCubeTexture } from "./scene";

const createMaterial = (imgPath) => {
	const textureLoader = new TextureLoader();

	const texture = textureLoader.load(imgPath);
	const envTexture = createCubeTexture();

	const material = new MeshStandardMaterial({
		map: texture,
		envMap: envTexture,
		envMapIntensity: 1,
		// flatShading: true,
		fog: true,
		emissive: 0x001212,
		color: 0xf2f2f2,
		roughness: 0.1,
		metalness: 0.97,
		// vertexColors: true,
		// fog: true,
		// envMapIntensity: 0.8,
	});

	return material;
};

function createCube() {
	// create a geometry
	const geometry = new SphereGeometry(5, 40, 40);

	// create a default (white) Basic material
	const material = createMaterial(
		"src/assets/46986414_waifu2x_photo_noise3_scale_tta_1.png"
	);

	// create a Mesh containing the geometry and material
	const cube = new Mesh(geometry, material);

	cube.rotation.set(MathUtils.degToRad(50), MathUtils.degToRad(30), 0);

	cube.position.set(8, 8, 8);

	cube.setPosition = (x, y, z) => cube.position.set(x, y, z);
	cube.setScale = (x, y, z) => cube.scale.set(x, y, z);
	const radiansPerSecond = MathUtils.degToRad(30);
	cube.tick = (delta) => {
		cube.rotation.z += (radiansPerSecond * delta) / 3;
		cube.rotation.x += (radiansPerSecond * delta) / 3;
		cube.rotation.y += (radiansPerSecond * delta) / 3;
		// if (count % 400 === 0) trigger = !trigger;
		// cube.position.z += trigger ? delta * 5 : -delta * 5;
		// cube.position.x += trigger ? delta * 5 : -delta * 5;
		// cube.position.y += trigger ? delta * 5 : -delta * 5;
		// count++;
	};

	return cube;
}

export { createCube, createMaterial };
