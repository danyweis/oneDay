<template>
  <div class="navbar" :class="{navbarOpen: isActive}">
    <div class="navBox">
      <div class="boxLogo">
        <div class="logo">
          <h2>ArchiModern</h2>
        </div>
        <div class="burger" @click="openMenu">
          <span class="block block1"></span>
          <span class="block block2"></span>
          <span class="block block3"></span>
        </div>
      </div>
      <div class="menuBlock">
        <ul class="navigationMenu">
          <li>
            <a @click="pageSelected = 'heropage'">Home</a>
          </li>
          <li>
            <a @click="pageSelected = 'aboutpage'">About</a>
          </li>
          <li>
            <a @click="pageSelected = 'infopage'">Info</a>
          </li>
          <li>
            <a @click="pageSelected = 'gridpage'">Projects</a>
          </li>
          <li>
            <a @click="pageSelected = 'contactpage'">Contact</a>
          </li>
        </ul>
        <ul class="socialMenu">
          <li class="socialIcon">
            <a href="#">F</a>
          </li>
          <li class="socialIcon">
            <a href="#">I</a>
          </li>
          <li class="socialIcon">
            <a href="#">T</a>
          </li>
          <li class="socialIcon">
            <a href="#">Y</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageSelected: "",
      isActive: false,
      burgerActive: true,
      arrowActive: false
    };
  },
  methods: {
    openMenu: function() {
      this.isActive = !this.isActive;
    }
  },
  watch: {
    pageSelected: function() {
      this.$emit("pageWasChanged", this.pageSelected);
    }
  }
};
</script>
