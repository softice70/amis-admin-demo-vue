<template>
  <div id="app" class="app-wrapper">
    <AmisDemo />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import AmisDemo from './components/amis-demo/amis-demo.vue'

export default {
  name: 'App',
  components: {AmisDemo},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
