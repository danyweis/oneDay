<template>
  <div class="container">
    <navbar @pageWasChanged="currentPage = $event"></navbar>
    <keep-alive>
      <component :is="currentPage"></component>
      <!-- <component @pageWasChanged="currentPage = $event" :is="currentPage"></component> -->
    </keep-alive>
  </div>
</template>

<script>
import Navbar from "./Nav.vue";
import Hero from "./Hero.vue";
import Info from "./Info.vue";
import About from "./About.vue";
import Grid from "./Grid.vue";
import Contact from "./Contact.vue";

export default {
  components: {
    navbar: Navbar,
    heropage: Hero,
    infopage: Info,
    aboutpage: About,
    gridpage: Grid,
    contactpage: Contact
  },
  data: function() {
    return {
      currentPage: "heropage"
    };
  }
};
</script>
