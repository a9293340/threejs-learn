import { AnimationMixer } from "three";

function setupModel(data) {
	const model = data.scene.children[0];
	const clip = data.animations[0];

	if (clip) {
		const mixer = new AnimationMixer(model);
		const action = mixer.clipAction(clip);
		action.play();

		model.tick = (delta) => mixer.update(delta);
	} else model.tick = () => {};

	return model;
}

export { setupModel };
