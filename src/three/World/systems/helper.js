import { AxesHelper, GridHelper, MathUtils } from "three";

function createAxesHelper() {
	const helper = new AxesHelper(15);
	helper.position.set(-20, 0, -30);
	helper.rotation.set(MathUtils.degToRad(20), MathUtils.degToRad(20), 0);
	return helper;
}

function createGridHelper() {
	const helper = new GridHelper(100, 30, "red", "yellow");
	// helper.rotation.set(MathUtils.degToRad(20), MathUtils.degToRad(20), 0);
	return helper;
}

export { createAxesHelper, createGridHelper };
