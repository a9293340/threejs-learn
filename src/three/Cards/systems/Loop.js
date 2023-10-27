import { Clock } from "three";

const clock = new Clock();
let previousTime = 0;
let cursor = { x: 0, y: 0 };

document.addEventListener(
	"mousemove",
	(event) => {
		event.preventDefault();
		cursor.x = event.clientX / window.innerWidth - 0.5;
		cursor.y = event.clientY / window.innerHeight - 0.5;
	},
	false
);

class Loop {
	constructor(camera, scene, renderer, tween, light) {
		this.camera = camera;
		this.scene = scene;
		this.renderer = renderer;
		this.tween = tween;
		this.light = light;
		this.updatables = [];
	}

	start() {
		this.renderer.setAnimationLoop(() => {
			this.tick();
			// render a frame
			this.tween.update();
			this.renderer.render(this.scene, this.camera);
		});
	}

	stop() {
		this.renderer.setAnimationLoop(null);
	}

	tick() {
		const delta = clock.getDelta();
		for (const object of this.updatables) {
			object.tick(delta);
		}
		const elapsedTime = clock.getElapsedTime();
		const deltaTime = elapsedTime - previousTime;
		previousTime = elapsedTime;
		const parallaxY = cursor.y;
		const parallaxX = cursor.x;
		// 点光源位置
		this.light.fillLight.position.y -=
			(parallaxY * 9 + this.light.fillLight.position.y - 2) * deltaTime;
		this.light.fillLight.position.x +=
			(parallaxX * 8 - this.light.fillLight.position.x) * 2 * deltaTime;
		// 相机组位置
		this.camera.position.y -=
			((parallaxY / 3 + this.camera.position.y) * deltaTime) / 100;
		this.camera.position.x +=
			(parallaxX / 3 - this.camera.position.x) * deltaTime;
	}
}

export { Loop };
