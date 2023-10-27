import {
	Color,
	Scene,
	TextureLoader,
	CubeTextureLoader,
	EquirectangularReflectionMapping,
	SRGBColorSpace,
	Fog,
} from "three";

function createScene() {
	const scene = new Scene();

	const textureEquirec = createCubeTexture();

	scene.background = textureEquirec;
	scene.fog = new Fog(0x1a1a1a, 1, 1000);

	return scene;
}

function createTexture() {
	const textureLoader = new TextureLoader();
	const textureEquirec = textureLoader.load(
		"src/assets/2294472375_24a3b8ef46_o.jpg"
	);
	textureEquirec.mapping = EquirectangularReflectionMapping;
	textureEquirec.colorSpace = SRGBColorSpace;

	return textureEquirec;
}

function createCubeTexture() {
	const loader = new CubeTextureLoader();
	loader.setPath("src/assets/Brigde/");
	const textureCube = loader.load([
		"posx.jpg",
		"negx.jpg",
		"posy.jpg",
		"negy.jpg",
		"posz.jpg",
		"negz.jpg",
	]);

	return textureCube;
}

export { createScene, createTexture, createCubeTexture };
