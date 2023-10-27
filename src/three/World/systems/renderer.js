import { WebGLRenderer } from "three";

function createRenderer() {
	const renderer = new WebGLRenderer({
		// 抗鋸齒
		antialias: true,
	});

	// turn on the physically correct lighting model
	// renderer.useLegacyLights = true;
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	return renderer;
}

export { createRenderer };
