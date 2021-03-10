<template>
  <div id="app" class="app-wrapper">
    <AmisDemo />
    <Toast key="toast" position="top-right" theme="default"/>
    <Alert key="alert" theme="default"/>
  </div>
</template>

<script>
import AmisDemo from './components/amis-demo/AmisDemo.vue'
import { ReactInVue } from 'vuera'
import {ToastComponent, AlertComponent} from 'amis';

export default {
  name: 'App',
  components: {
    AmisDemo,
    Toast: ReactInVue(ToastComponent),
    Alert: ReactInVue(AlertComponent)
  },
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
