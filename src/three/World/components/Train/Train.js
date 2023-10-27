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
// 對y軸進行轉動
const yAxis = new Vector3(0, 1, 0);

const qInitial = new Quaternion().setFromAxisAngle(yAxis, 0);
const qFinal = new Quaternion().setFromAxisAngle(yAxis, -Math.PI / 2);
const qFinal2 = new Quaternion().setFromAxisAngle(yAxis, -Math.PI);
const qFinal3 = new Quaternion().setFromAxisAngle(yAxis, (-Math.PI * 3) / 2);
const qFinal4 = new Quaternion().setFromAxisAngle(yAxis, -Math.PI * 2);

const wheelSpeed = MathUtils.degToRad(24);

const positionKF = new VectorKeyframeTrack(
	".position",
	[0, 3, 6, 9, 12],
	[
		...[30, 0, 30],
		...[-45, 0, 30],
		...[-45, 0, -45],
		...[30, 0, -45],
		...[30, 0, 30],
	]
);

const rotationKF = new QuaternionKeyframeTrack(
	".quaternion",
	[0, 2.8, 3, 5.8, 6, 8.8, 9, 11.8, 12],
	[
		...[qInitial.x, qInitial.y, qInitial.z, qInitial.w],
		...[qInitial.x, qInitial.y, qInitial.z, qInitial.w],
		...[qFinal.x, qFinal.y, qFinal.z, qFinal.w],
		...[qFinal.x, qFinal.y, qFinal.z, qFinal.w],
		...[qFinal2.x, qFinal2.y, qFinal2.z, qFinal2.w],
		...[qFinal2.x, qFinal2.y, qFinal2.z, qFinal2.w],
		...[qFinal3.x, qFinal3.y, qFinal3.z, qFinal3.w],
		...[qFinal3.x, qFinal3.y, qFinal3.z, qFinal3.w],
		...[qFinal4.x, qFinal4.y, qFinal4.z, qFinal4.w],
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
