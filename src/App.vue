<script setup>
import { World } from '@/three/World/World.js';
import { onMounted } from 'vue';

const initThree = () => {
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.render();
};

onMounted(() => {
  initThree();
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
