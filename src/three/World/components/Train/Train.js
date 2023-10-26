import {
	Group,
	MathUtils,
	AnimationClip,
	QuaternionKeyframeTrack,
	VectorKeyframeTrack,
	AnimationMixer,
	Quaternion,
	Vector3,
} from "three";

import { createMeshes } from "./mesh.js";
const xAxis = new Vector3(0, 1, 0);

const qInitial = new Quaternion().setFromAxisAngle(xAxis, 0);
const qFinal = new Quaternion().setFromAxisAngle(xAxis, Math.PI);
const qFinal2 = new Quaternion().setFromAxisAngle(xAxis, Math.PI * 2);

const wheelSpeed = MathUtils.degToRad(24);

const positionKF = new VectorKeyframeTrack(
	".position",
	[0, 3, 6],
	[10, 10, 10, -105, 10, 9.5, 10, 10, 10]
);

const rotationKF = new QuaternionKeyframeTrack(
	".quaternion",
	[0, 2.99, 3, 5.99, 6],
	[
		qInitial.x,
		qInitial.y,
		qInitial.z,
		qInitial.w,
		qInitial.x,
		qInitial.y,
		qInitial.z,
		qInitial.w,
		qFinal.x,
		qFinal.y,
		qFinal.z,
		qFinal.w,
		qFinal.x,
		qFinal.y,
		qFinal.z,
		qFinal.w,
		qFinal2.x,
		qFinal2.y,
		qFinal2.z,
		qFinal2.w,
	]
);

class Train extends Group {
	#mixer;
	constructor() {
		super();

		this.meshes = createMeshes();

		this.add(
			this.meshes.nose,
			this.meshes.cabin,
			this.meshes.chimney,
			this.meshes.smallWheelRear,
			this.meshes.smallWheelCenter,
			this.meshes.smallWheelFront,
			this.meshes.bigWheel
		);

		const moveBlinkClip = new AnimationClip("move-n-blink", -1, [
			positionKF,
			rotationKF,
		]);

		this.#mixer = new AnimationMixer(this);
		const action = this.#mixer.clipAction(moveBlinkClip);
		action.play();
	}

	tick(delta) {
		this.meshes.bigWheel.rotation.y += wheelSpeed * delta * 10;
		this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta * 10;
		this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta * 10;
		this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta * 10;
		this.#mixer.update(delta);
	}
}

export { Train };
