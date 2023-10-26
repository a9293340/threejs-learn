import { SphereGeometry, Group, MathUtils, Mesh } from "three";
import { createMaterial } from "./cube";

function createMeshGroup() {
	const group = new Group();

	const geometry = new SphereGeometry(1.5, 15, 15);
	const material = createMaterial("src/assets/Dark_Magician_Girl_29.webp");

	const protoSphere = new Mesh(geometry, material);

	// add the sphere to the group
	group.add(protoSphere);

	for (let i = 0; i < 1; i += 0.1) {
		const sphere = protoSphere.clone();

		// position the spheres on around a circle
		sphere.position.x = Math.cos(2 * Math.PI * i) * 3;
		sphere.position.y = Math.sin(2 * Math.PI * i) * 3;
		sphere.position.z = i * 3;

		sphere.scale.multiplyScalar(0.01 + i);

		group.add(sphere);
	}

	group.scale.multiplyScalar(2);
	group.position.set(5.5, 5.5, 5.5);

	const radiansPerSecond = MathUtils.degToRad(30);

	group.tick = (delta) => {
		group.rotation.z -= delta * radiansPerSecond;
	};

	return group;
}

export { createMeshGroup };
