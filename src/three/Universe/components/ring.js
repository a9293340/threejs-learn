import { MeshLambertMaterial, TorusGeometry, Mesh, Vector3 } from "three";
const createRing = () => {
	const geometry = new TorusGeometry(20, 2, 2, 250);
	const TorusMaterial = new MeshLambertMaterial({
		color: 0x40a9ff,
		wireframe: true,
	});
	const ring = new Mesh(geometry, TorusMaterial);
	ring.rotation.x = Math.PI / 3;
	ring.rotation.y = -0.2 * (Math.PI / 2);

	const axis = new Vector3(0, 0, 1);
	ring.tick = () => {
		ring.rotateOnAxis(axis, Math.PI / 400);
	};

	return ring;
};

export { createRing };
