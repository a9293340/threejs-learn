<script setup>
import { World } from "@/three/World/World.js";
import { Cards } from "@/three/Cards/Cards.js";
import { Universe } from "./three/Universe/Universe.js";
import { onMounted } from "vue";

const initThree = async () => {
	const container = document.querySelector("#scene-container");
	const cards = new Cards(container);

	cards.start();

	await cards.init();
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
