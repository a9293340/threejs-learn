import {
	SphereGeometry,
	Mesh,
	MeshStandardMaterial,
	MathUtils,
	TextureLoader,
} from "three";

const createMaterial = (imgPath) => {
	const textureLoader = new TextureLoader();

	const texture = textureLoader.load(imgPath);

	const material = new MeshStandardMaterial({
		map: texture,
		fog: true,
		color: "white",
	});

	return material;
};

const createSatellite = () => {
	const geometry = new SphereGeometry(5, 40, 40);
	const IcoMaterial = createMaterial(
		"src/assets/46986414_waifu2x_photo_noise3_scale_tta_1.png"
	);
	const satellite = new Mesh(geometry, IcoMaterial);
	satellite.position.set(-30, -20, -10);

	let rot = 0;

	satellite.tick = () => {
		rot += Math.random() * 0.8;
		const radian = (rot * Math.PI) / 180;
		satellite.position.x = 250 * Math.sin(radian);
		satellite.position.y = 100 * Math.cos(radian);
		satellite.position.z = -100 * Math.cos(radian);
		satellite.rotation.x += 0.005;
		satellite.rotation.y += 0.005;
		satellite.rotation.z -= 0.005;
	};

	return satellite;
};

export { createSatellite };
