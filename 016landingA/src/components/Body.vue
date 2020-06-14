<template>
  <div class="container">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './Nav.vue'
import Hero from './Hero.vue'

export default {
  components: {
    navbar: Navbar,
  },
  data: function() {
    return {}
  },
}
</script>

<style lang="sass"></style>
