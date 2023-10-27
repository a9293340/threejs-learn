import { WebGLRenderer } from "three";

function createRenderer() {
	const renderer = new WebGLRenderer({
		// 抗鋸齒
		antialias: true,
	});

	// turn on the physically correct lighting model
	// renderer.useLegacyLights = true;
	renderer.setPixelRatio(window.devicePixelRatio);
	return renderer;
}

export { createRenderer };
