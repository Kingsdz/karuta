<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'app',
  components: { NavBar, FooterComponent }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212529;
  padding: 80px 15px;
}
</style>
