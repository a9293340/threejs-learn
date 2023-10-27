import { MeshLambertMaterial, SphereGeometry, Mesh } from "three";

const createPlanet = () => {
	const SphereMaterial = new MeshLambertMaterial({
		color: 0x03c03c,
		wireframe: true,
		opacity: 1,
	});
	const geometry = new SphereGeometry(10, 32, 32);
	const planet = new Mesh(geometry, SphereMaterial);

	planet.tick = () => {
		planet.rotation.y += 0.005;
	};

	return planet;
};

export { createPlanet };
