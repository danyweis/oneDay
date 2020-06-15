<template>
  <div class="container">
    <navbar></navbar>
    <heropage></heropage>
  </div>
</template>

<script>
import Navbar from "./Nav.vue";
import Hero from "./Hero.vue";

export default {
  components: {
    navbar: Navbar,
    heropage: Hero
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="sass"></style>
