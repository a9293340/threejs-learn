import { IcosahedronGeometry, MeshToonMaterial, Mesh, Group } from "three";

const createStarGroup = () => {
	const stars = new Group();
	for (let i = 0; i < 800; i++) {
		const geometry = new IcosahedronGeometry(Math.random() * 2, 0);
		const material = new MeshToonMaterial({ color: 0xeeeeee });
		const mesh = new Mesh(geometry, material);

		mesh.position.x = (Math.random() - 0.5) * 700;
		mesh.position.y = (Math.random() - 0.5) * 700;
		mesh.position.z = (Math.random() - 0.5) * 700;
		mesh.rotation.x = Math.random() * 2 * Math.PI;
		mesh.rotation.y = Math.random() * 2 * Math.PI;
		mesh.rotation.z = Math.random() * 2 * Math.PI;

		stars.add(mesh);
	}

	stars.tick = () => {
		stars.rotation.y += 0.0009;
		stars.rotation.z -= 0.0003;
	};

	return stars;
};

export { createStarGroup };
