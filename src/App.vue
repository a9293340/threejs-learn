<script setup>
import { World } from "@/three/World/World.js";
import { onMounted } from "vue";

const initThree = async () => {
	const container = document.querySelector("#scene-container");
	const world = new World(container);

	await world.init();

	world.start();
};

onMounted(async () => {
	await initThree();
});
</script>

<template>
	<div id="scene-container"></div>
</template>

<style>
body,
html,
#app {
	width: 100%;
	height: 100vh;
	margin: 0;
	padding: 0;
	#scene-container {
		width: 100%;
		height: 100vh;
	}
}
</style>
