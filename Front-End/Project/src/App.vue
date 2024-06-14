<template>
  <div id="app">
    <Navbar v-if="showNavbar" />
    <router-view @toggle-navbar="toggleNavbar"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      showNavbar: true
    };
  },
  watch: {
    $route(to) {
      this.showNavbar = to.path !== '/invitation';
    }
  },
  methods: {
    toggleNavbar(show) {
      this.showNavbar = show;
    }
  }
};
</script>

<style>
/* Your styles here */
</style>
